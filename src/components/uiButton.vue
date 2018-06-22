<template>
    <h1>
        this is button
        <input type="text" :value="count" /><button @click="count++">add</button>
    </h1>
</template>

<script>
export default {
    data(){
        return { count : 1}
    }
}
</script>

<style>

</style>
