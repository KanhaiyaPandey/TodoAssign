

import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

const App = () => {

  const [showTodoList, setShowTodoList] = useState(false);

  const toggleTodoList = () => {
    setShowTodoList(!showTodoList);
  };
  return (
    <Provider store={store}>
      <div className='w-full h-screen flex flex-col items-center gap-10 justify-center text-white bg-black '>
        <h1 className=' text-5xl font-bold'>Todo List</h1>
        <div className='flex flex-col gap-4'>
        <TodoForm />

        <button className=' btn btn-primary' onClick={toggleTodoList}>
          {showTodoList ? 'Hide Tasks' : 'Show Tasks'}
        </button>
        {showTodoList && <TodoList />}

        </div>
      </div>
    </Provider>
  );
};

export default App;
