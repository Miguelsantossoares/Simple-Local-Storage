<template>
  <input type="text" v-model="mytodo" />
  <button @click="AddTodo">Adicionar Todo</button>
  <div v-if="!isEmpty">
    <p v-for="(todo, index) in todos" :key="index">
      {{ index }}. {{ todo }} <button @click="removeTodo(index)">deletar</button>
    </p>
  </div>
  <div v-else>Todos não encontrado</div>
</template>

<script>
import { computed, ref } from "vue";
import { useMainStore } from "./store.js";
export default {
  setup() {
    const main = useMainStore();
    const mytodo = ref("");
    const AddTodo = () => {
      if (mytodo.value != "") {
        main.addTodo(mytodo.value);
        mytodo.value = "";
      }
    };
    return {
      AddTodo,
      mytodo,
      todos: computed(() => main.getAllTodos),
      isEmpty: computed(() => main.todoEmpty),
      removeTodo: main.removeTodo,
    };
  },
};
</script>