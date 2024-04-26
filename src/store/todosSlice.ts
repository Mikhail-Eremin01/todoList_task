import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ITodo = {
    id: string;
    text: string;
    deleted: boolean;
};
export interface IInitialState {
    todos: ITodo[];
}
export const initialState: IInitialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todos.unshift({
                id: new Date().toISOString(),
                text: action.payload,
                deleted: false,
            });
        },
        deleteTodo(state, action: PayloadAction<{ id: string }>) {
            state.todos = state.todos.map((el) => {
                if (action.payload.id === el.id) {
                    el.deleted = true;
                    return el;
                } else {
                    return el;
                }
            });
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
