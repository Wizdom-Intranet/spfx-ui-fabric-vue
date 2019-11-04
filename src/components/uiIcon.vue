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

        if(!window["wizstyle-font-" + this.bundle])
        {
            fontFace({
                fontFamily: "FabricMDL2Icons-" + this.bundle,
                src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + this.bundle +".woff) format(\"woff\")"
            });
            window["wizstyle-font-" + this.bundle] = true;
        }
        else
            console.log("skip loading font: " + this.bundle);
        
        this.cl = window["wizstyle-class-" + this.bundle + this.name] || mergeStyles({ 
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
        window["wizstyle-class-" + this.bundle + this.name] = this.cl;        
    }
}
</script>