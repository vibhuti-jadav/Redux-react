import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../reduxToolkit/reducers/todoSlice';

const Todo = () => {

    const [todo, setTodo]  = useState("")

    const todoList = useSelector((state) => state.todo)
    const dispatch  =useDispatch()

    console.log(todoList)

    return (
         <div className='max-w-7xl mx-auto my-10 text-center'>

                 <div className="flex gap-2">
                       
                         <input type="text" onChange={(e) => setTodo(e.target.value)} class="block w-100 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button onClick={() => dispatch(todoActions.addTodo(todo))} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Add</button>
                    </div> 
       
            </div>
    );
}

export default Todo;