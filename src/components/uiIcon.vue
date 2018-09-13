<template>
    <i :class="iconClass" @click="$emit('click')"></i>
</template>

<script>
// import { loadStyles } from '@microsoft/load-themed-styles';
export default {
    computed:{
        iconClass(){
            return `ms-Icon ms-Icon--${this.name}`
        }
    },
    mounted(){
        var baseUrl = "https://spoprod-a.akamaihd.net/files/fabric/assets/icons"; // this is the baseUrl used by MS!
        loadStyles(`
            @font-face{
                font-family:fabricmdl2icons${this.$options._scopeId}${this.bundle};
                src: url(${baseUrl}/fabric-icons-${this.bundle}.woff) format("woff")
            }
            .ms-Icon[${this.$options._scopeId}]{display:inline-block;font-style:normal;font-weight:400;speak:none}
            .ms-Icon--${this.name}[${this.$options._scopeId}]:before{font-family:fabricmdl2icons${this.$options._scopeId}${this.bundle}; content:"${this.unicode}"}
        `)
    }
}
</script>
<style scoped>
    
</style>
