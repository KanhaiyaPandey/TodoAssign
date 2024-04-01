import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: {
    todos: reducer // assuming your reducer is named 'reducer'
  }
});

export default store;

