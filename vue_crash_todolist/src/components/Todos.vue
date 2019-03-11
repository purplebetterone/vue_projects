<template>
<div>
    <div v-bind:key="todo.id" v-for="todo in todos">
       <Todoitem v-bind:todo="todo" />
    </div>
</div>
</template>

<script>
import Todoitem from './Todoitem.vue';

export default {
    name: "Todos",
    components: {
        Todoitem
    },
    props: ["todos"]
}
</script>

<style scoped>


</style>