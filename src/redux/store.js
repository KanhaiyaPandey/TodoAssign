import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: {
    todos: reducer 
  }
});

export default store;

