import { fontFace, mergeStyles } from '@uifabric/merge-styles';

//
var script = {
  data: function data() {
    return {
      cl: ""
    };
  },
  computed: {
    iconClass: function iconClass() {
      return "ms-Icon ms-Icon--".concat(this.name, " ") + this.cl;
    }
  },
  mounted: function mounted() {

    fontFace({
      fontFamily: "FabricMDL2Icons-" + this.bundle,
      src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + this.bundle + ".woff) format(\"woff\")"
    });
    this.cl = mergeStyles({
      displayName: this.$options._scopeId,
      display: 'inline-block',
      fontStyle: 'normal',
      fontWeight: '400',
      speak: 'none',
      selectors: {
        ":before": {
          fontFamily: "FabricMDL2Icons-" + this.bundle,
          content: "'" + this.unicode + "'"
        }
      }
    });
  }
};

export default script;
