import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'; // Import nanoid

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(task) {
        return { payload: { id: nanoid(), task } };
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


  