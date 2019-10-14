<script>
import { loadStyles } from '@microsoft/load-themed-styles';
import Spinner from "office-ui-fabric-vue/src/components/Spinner/Spinner.vue";
import { Spinner as fabricSpinner } from "office-ui-fabric-js/src/components/Spinner/Spinner"

export default {
    loadStyles,
    beforeMount(){
        this.$fabric = {
            Spinner : fabricSpinner
        };
    },
    mounted() {
        // console.log("spin", this.$refs.spinner);
        var childs = this.$refs.spinner.querySelectorAll(":not([" + this.$options._scopeId + "])");
        //IE vs. Array.From vs. querySelectorAll = no work >.<
        //Array.prototype.slice, does the trick instead 
        Array.prototype.slice.call(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
        // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
    },
    extends :  Spinner
}
</script>
<style lang="scss" scoped>
    @import 'node_modules/office-ui-fabric-core/src/sass/_Fabric.Common';
    @import '../misc/fixThemeVars';
    @import "node_modules/office-ui-fabric-js/src/components/Spinner/Spinner";
</style>