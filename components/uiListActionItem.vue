<template>
  <div class='ms-ListItem-action' @click.stop='clickEvent'>
    <slot name='icon' />
  </div>
</template>
<script>
import ListActionItem from "office-ui-fabric-vue/src/components/List/ListActionItem.vue";

export default {
    extends :  ListActionItem,
    created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}
</script>