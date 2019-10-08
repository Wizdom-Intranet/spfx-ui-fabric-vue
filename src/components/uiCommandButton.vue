<template>
    <div class='ms-CommandButton' :class='commandButtonClass' @click='clickEvent'>
        <button class='ms-CommandButton-button'>
        <span class='ms-CommandButton-icon ms-fontColor-themePrimary' v-if='hasIcon'>
            <slot name='icon' />
         </span>
        <span class='ms-CommandButton-label'><slot /></span>
        <span class='ms-CommandButton-dropdownIcon' v-if="type == 'dropdown'">
            <i class='ms-Icon ms-Icon--ChevronDown'></i>
        </span>
        </button>
    </div>
</template>
<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import commandbutton from "office-ui-fabric-vue/src/components/command_button/commandbutton.vue";
import { CommandButton as fabricCommandButton } from "office-ui-fabric-js/src/components/commandbutton/commandbutton"


export default {
    loadStyles,
    computed: {
        hasIcon () {
            return !!this.$slots['icon']
        }
    },
    beforeMount(){ 
        this.$fabric = { 
            CommandButton : fabricCommandButton 
        } 
    },
    extends :  commandbutton
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Commandbutton/Commandbutton";
</style>