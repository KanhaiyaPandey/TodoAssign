import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import toast from 'react-hot-toast';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() === '') return;
      dispatch(addTodo(task));
      setTask('');
      toast.success('Task added successfully!');
    };
  

  return (
    <form className=' flex gap-3' onSubmit={handleSubmit}>
      <input className=' input input-bordered' type="text" value={task} onChange={handleChange} />
      <button className=' btn btn-secondary' type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
