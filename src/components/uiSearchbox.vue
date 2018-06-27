<script>
import searchBox from "office-ui-fabric-vue/src/components/search_box/searchbox.vue";
import { SearchBox as fabricSearchBox } from "office-ui-fabric-js/src/components/SearchBox/SearchBox"

export default {
    injectCss,
    beforeMount(){
        this.$fabric = {
            SearchBox : fabricSearchBox
        };
    },
    extends :  searchBox
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Label/Label"; /* searchbox uses mixins from label */
    @import "node_modules/office-ui-fabric-js/src/components/CommandButton/CommandButton"; /* searchbox uses classes from CommandButton */    
    @import "node_modules/office-ui-fabric-js/src/components/SearchBox/SearchBox";

    .ms-Icon.ms-Icon--Search
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#0078d7" stroke="none" transform="translate(0, 2048) scale(1, -1)" d="M1344 2048q97 0 187 -25t168 -71t142.5 -110.5t110.5 -142.5t71 -168t25 -187t-25 -187t-71 -168t-110.5 -142.5t-142.5 -110.5t-168 -71t-187 -25q-125 0 -239.5 42t-210.5 121l-785 -784q-19 -19 -45 -19t-45 19t-19 45t19 45l784 785q-79 96 -121 210.5t-42 239.5q0 97 25 187t71 168t110.5 142.5t142.5 110.5t168 71t187 25zM1344 768q119 0 224 45.5t183 123.5t123.5 183t45.5 224t-45.5 224t-123.5 183t-183 123.5t-224 45.5t-224 -45.5t-183 -123.5t-123.5 -183t-45.5 -224t45.5 -224t123.5 -183t183 -123.5t224 -45.5z"/></svg>');
    }
    .ms-Icon.ms-Icon--Clear
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="white" stroke="none" d="M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z"/></svg>');
    }
    .ms-SearchBox--commandBar .ms-Icon.ms-Icon--Clear
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="14" height="14" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#a6a6a6" stroke="none" d="M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z"/></svg>');
    }
</style>