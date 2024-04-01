
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
  
    const handleDelete = (id) => {
      dispatch(deleteTodo({ id })); 
    };

  return (
    <div>
           {todos.length > 0 ? (
        <ul className='flex flex-col gap-3 w-full'>
          {todos.map(todo => (
            <li className='flex justify-between items-center' key={todo.id}>
              {todo.task}
              <button className='btn btn-primary' onClick={() => handleDelete(todo.id)}>Delete Task</button>
            </li>
          ))}
        </ul>
        ) : (
        <p className=' mt-5 text-xl font-semibold text-center'>No Task To Show !</p>
      )}
    </div>
  );
};

export default TodoList;
