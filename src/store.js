import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useMainStore = defineStore({
    id: 'main',
    state: () => ({
        todos: useStorage('todos', [])
    }),
    getters: {
        getAllTodos() {
            return this.todos
        },
        todoEmpty() {
            return this.todos.length <= 0
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }

    },
})