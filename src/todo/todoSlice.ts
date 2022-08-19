import { createSlice } from '@reduxjs/toolkit';
import {TodoType} from '../types/types'

const todoInput: string = '';
const todosState: TodoType[] = [
    {
        id: 0,
        todo: undefined,
        done: undefined,
    },
];

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: todosState,
        todoInput: todoInput,
    },
    reducers: {
        addTodo: (state, action) => {
            if(state.todos[0].todo === undefined) {
                state.todos = state.todos.filter((e) => e.todo !== undefined);
            }
            state.todos = [...state.todos,
                {
                    id: state.todos.length,
                    todo: action.payload,
                    done: false
                }
            ];
            state.todoInput = '';
        },
        changeDone: (state, action) => {
            state.todos[action.payload].done = !state.todos[action.payload].done
        },
        onChange: (state, action) => {
            state.todoInput = action.payload;
        }
    }
});

export const { addTodo, changeDone, onChange } = todoSlice.actions;
export default todoSlice.reducer;