<template>
    <div class='ms-MessageBanner is-hidden' ref='messageBanner'>
        <div class='ms-MessageBanner-content'>
        <div class='ms-MessageBanner-text'>
            <div class='ms-MessageBanner-clipper'><slot /></div>
        </div>
        <button class='ms-MessageBanner-expand'>
            <i class='ms-Icon ms-Icon--ChevronDown'></i>
        </button>
        <div class='ms-MessageBanner-action'>
            <slot name='actions' />
        </div>
        </div>
        <button class='ms-MessageBanner-close'>
            <i class='ms-Icon ms-Icon--Clear'></i>
        </button>
    </div>
</template>
<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import MessageBanner from "office-ui-fabric-vue/src/components/Message_Banner/MessageBanner.vue";
import { MessageBanner as fabricMessageBanner } from "office-ui-fabric-js/src/components/MessageBanner/MessageBanner"

export default {
    loadStyles,
    props: {
        value: Boolean
    },
    data(){
        return {
            instance : null
        };
    },
    watch: {
        value() {
            this.setVisibility();
        }
    },
    methods:{
        setVisibility(){
            if(this.value)
            {
                if(!this.instance)
                {
                    this.instance = new fabricMessageBanner(this.$refs.messageBanner);
                    this.instance._closeButton.addEventListener("click", ()=>{
                        console.log("closed");
                        this.$emit('input', false);
                        // this.value = false;
                    }, false);
                }
                this.instance.show();
            }
            else if(this.instance && this.$refs.messageBanner.className.indexOf("is-hidden")<0)
                this.instance.hide();
        }
    },
    mounted() {
        this.setVisibility();
    }
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import 'node_modules/office-ui-fabric-core/src/sass/Fabric.Animations.Output';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/MessageBanner/MessageBanner";
    @font-face {
        font-family: "FabricMDL2Icons-a13498cf";
        src: url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-a13498cf.woff) format('woff')
    }

    .ms-Icon{
        display: "inline-block";
        font-style: "normal";
        font-weight: 400;
        &.ms-Icon--Clear::before
        {
            font-family: 'FabricMDL2Icons-a13498cf';
            content: '\E894';
        }
    }
</style>