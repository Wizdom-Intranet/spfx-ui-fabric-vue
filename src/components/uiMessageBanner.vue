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
import MessageBanner from "office-ui-fabric-vue/src/components/Message_Banner/MessageBanner.vue";
import { MessageBanner as fabricMessageBanner } from "office-ui-fabric-js/src/components/MessageBanner/MessageBanner"

export default {
    injectCss,
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

    .ms-Icon.ms-Icon--Clear
    {
        content: url('data:image/svg+xml;utf8,<svg viewBox="0 -0 2048 2048" width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z" fill="black" stroke="none"/></svg>');
    }
</style>