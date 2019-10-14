<template>
    <i :class="iconClass" @click="$emit('click')"></i>
</template>

<script>
import { fontFace, mergeStyles } from '@uifabric/merge-styles';

export default {
    data(){
        return {
            cl : ""
        };
    },
    computed:{
        iconClass(){
            return `ms-Icon ms-Icon--${this.name} ` + this.cl;
        }
    },
    mounted(){
        var baseUrl = "//spoprod-a.akamaihd.net/files/fabric/assets/icons"; // this is the baseUrl used by MS!

        fontFace({
            fontFamily: "FabricMDL2Icons-" + this.bundle,
            src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + this.bundle +".woff) format(\"woff\")"
        });
        this.cl = mergeStyles({ 
            displayName : this.$options._scopeId,
            display: 'inline-block',
            fontStyle: 'normal',
            fontWeight: '400',
            speak: 'none',
            selectors: {
                ":before":{
                    fontFamily: "FabricMDL2Icons-" + this.bundle,
                    content: "'" + this.unicode + "'"
                }
            }
        });
    }
}
</script>