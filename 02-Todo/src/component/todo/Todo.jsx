import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import { handleAdd } from '../../redux/Action';



const Todo = () => {

    const [to, setTo] = useState("")

    const dispatch = useDispatch()
    const todoData = useSelector((store)=>store)


    return (
        <>
        <div className='max-w-xl mx-auto  rounded-3 p-2 flex gap-4'>
            <input type="text" value={to} onChange={(e)=> setTo(e.target.value)} className='border-b-neutral-800 border rounded-2xl  p-2 ' />
            <button  onClick={() => dispatch(handleAdd(to))} className='border rounded-full py-1 px-10 bg-green-600 hover:bg-green-700 focus:bg-green-900 text-white '>Add</button>
        </div>
        <TodoList />
        </>
    );
}

export default Todo;