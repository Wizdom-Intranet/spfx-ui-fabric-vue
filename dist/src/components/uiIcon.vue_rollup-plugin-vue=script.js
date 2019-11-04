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

    if (!window["wizstyle-font-" + this.bundle]) {
      fontFace({
        fontFamily: "FabricMDL2Icons-" + this.bundle,
        src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + this.bundle + ".woff) format(\"woff\")"
      });
      window["wizstyle-font-" + this.bundle] = true;
    } // else
    //     console.log("skip loading font: " + this.bundle);


    this.cl = window["wizstyle-class-" + this.bundle + this.name] || mergeStyles({
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
    window["wizstyle-class-" + this.bundle + this.name] = this.cl;
  }
};

export default script;
