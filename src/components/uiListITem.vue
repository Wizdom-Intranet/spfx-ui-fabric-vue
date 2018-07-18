<script>
import ListItem from "office-ui-fabric-vue/src/components/List/ListItem.vue";

export default {
    injectCss,
    extends :  ListItem
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/ListItem/ListItem";

    .ms-ListItem.is-selected{
        &::before,
        &:hover::before {
            top:14px;
            content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="17" height="17" version="1.1" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0, 2048) scale(1, -1)" d="M2048 2048v-2048h-2048v2048h2048zM1920 1920h-1792v-1792h1792v1792zM768 421l-429 430l90 90l339 -338l851 850l90 -90z" fill="black" stroke="none"/></svg>');        
        }
    }
</style>