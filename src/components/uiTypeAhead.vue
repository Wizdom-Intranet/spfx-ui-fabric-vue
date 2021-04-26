<template>
    <div class="uiTypeAhead">
        <popper
            trigger="click"
            ref="popper"
            :options="popperOptions">
            <div class="popper foldout">
                <div class="optionlist" ref="optionlist">
                    <div v-for="(option, index) in options" 
                    ref="option"
                    :key="option.id" 
                    class="option" 
                    :class="{'selectedOption' : index == current}"
                    @click="selectOption(option)" 
                    >
                        {{option[display]}}
                    </div>
                </div>
            </div>
            <div class="inputGroup" slot="reference"
                @keydown.down="down"
                @keydown.up="up"
                @keydown.enter="selectOption(options[current])">
                <div class="inputContainer">
                    <uiTextfield 
                        v-model="userInput"
                        :label="label" 
                        :placeholder="placeholderText"
                     />
                    <uiIconChevronDownMed class="chevronIcon"/>
                </div>
            </div>
        </popper>
    </div>
</template>

<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import uiTextfield from "./uiTextfield.vue";
import { uiIconChevronDownMed } from "./uiIcon";
import Popper from 'vue-popperjs';
import debounce from 'lodash.debounce';

export default {
    loadStyles, 
    components:{
        uiTextfield, 
        uiIconChevronDownMed,
        Popper
    },
    props: [
        'options',          //Array of available options to display in dropdown
        'display',          //String that decides what attribute on the options is used for display and typeahead
        'placeholderText',  //String to use as placeholder text
        'label',            //Label
        'autoselectOff',    //Whether to autoselect a matching option on user input, without user must click in the dropdown. Autoselect on by default.
    ],
    data: function() {
        return {
            selected: null,
            userInput: '',
            current: 0
        }
    },
    methods: {
        up() {
            if(this.options.length) {
                if(!this.$refs.popper.showPopper) {
                    this.$refs.popper.doShow();
                }
                else if(this.current > 0 && this.$refs.popper.showPopper) {
                    this.current--;
                    this.updateScroll();
                }  
            }  
        },

        down() {
            if(this.options.length) {
                if(!this.$refs.popper.showPopper) {
                    this.$refs.popper.doShow();
                }
                else if(this.current < this.options.length - 1) {
                    this.current++;
                    this.updateScroll();
                } 
            } 
        },

        updateScroll(){
            this.$refs.option[this.current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        },

        selectOption(option) {
            this.selected = option;
            this.userInput = option[this.display];
        },
        
        // Autoselects an option if userinput matches display attribute
        autoselectMatch: debounce(function() {
            if(this.autoselectOff == true) { return; }

            this.options.forEach(option => {
                //Regex for exact match but case insensitive
                let regex = new RegExp('^' + this.userInput + '$', 'i');
                if (regex.test(option[this.display])) {
                    this.selectOption(option);
                }
            })
        }, 500),

        setUserInput(newInput) {
            this.userInput = newInput;
        }
    },
    computed: {
        popperOptions(){
            return {
                placement: "bottom-end",
                trigger: "focus",
                positionFixed: true,
                modifiers: { 
                    preventOverflow: { enabled: true },
                    flip: { enabled: true },
                    autoSizing: {
                        enabled: true,
                        fn: function autoSizing(data) {
                            data.styles.width = data.offsets.reference.width - 2;
                            return data;
                        },
                        order: 840,
                    },
                }
            }
        },
    },
    watch: {
        "userInput": debounce(function (newVal) {
            if(this.selected == null || this.selected[this.display] != newVal) {
                this.$refs.popper.doShow();
            };
            this.autoselectMatch();
            this.$emit('inputChanged', newVal)
        }, 500),
        "selected": function (newVal) {
            this.$refs.popper.doClose();
            this.$emit('optionSelected', newVal);
        },
    },
}

</script>

<style lang="scss" scoped>

// @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
@import '../misc/fixThemeVars'; //For using themecolors
@import 'node_modules/vue-popperjs/dist/vue-popper';

    .inputGroup {
        position: relative;

        .chevronIcon {
            color: $ms-color-neutralDark;
            font-size: 12px;
            position: absolute;
            right: 13px;
            bottom: 7px;
            pointer-events: none;
        }

        ::v-deep .ms-TextField-field {
            padding-right: 32px;
        }

    }

    .foldout {
        background-color:white;
        margin: 0px !important;;
        padding: 0px;
        box-shadow: 1px 1px 5px 0px $ms-color-neutralQuaternaryAlt;
        border-radius: 2px;
    }

    .optionlist {
        max-height: 200px;
        overflow: auto;
    }

    .option {
        height: 19px;
        font-weight: 400;
        padding: 7px 10px 7px 10px;
        text-align: left;
        white-space: nowrap;
        cursor: pointer;
        color: $ms-color-neutralPrimary;

        &:hover{
            color: $ms-color-black;
            background-color: $ms-color-neutralLight;
        }
    }

    .selectedOption {
        color: $ms-color-black;
        background-color: $ms-color-themeLight;

        &:hover{
            background-color:  $ms-color-themeLight; //To overwrite unselected hover
        }
    } 

    .selected {
        color: $ms-color-black;
        background-color: rgb(123, 152, 207);
    }  

</style>
