<template>
    <div class='ms-MessageBar' :class='messageBarClass'>
        <div class='ms-MessageBar-content'>
        <div class='ms-MessageBar-icon' v-if='hasIcon'>
            <slot name='icon' />
        </div>
        <div class='ms-MessageBar-text'>
            <slot />
        </div>
        </div>
    </div>
</template>
<script>
import MessageBar from "office-ui-fabric-vue/src/components/Message_Bar/MessageBar.vue";

export default {
    injectCss,
    computed: {
        hasIcon () {
            return !!this.$slots['icon']
        }
    },
    extends :  MessageBar
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/MessageBar/MessageBar";
</style>