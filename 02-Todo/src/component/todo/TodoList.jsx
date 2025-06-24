// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleDelete, handleStatus } from '../../redux/Action';
// const TodoList = () => {

// const todo = useSelector((state)=>state.todo)
// const dispatch = useDispatch()


//     return (
//         <div>
//             <div className="max-w-xl mx-auto my-10">
//                 <table className="table-auto" >
//                     <tr>
//                         <th className='px-10 py-3 border border-b-gray-700  bg-gray-300'>Id</th>
//                         <th className='px-10 py-3 border border-b-gray-700  bg-gray-300'>Todo</th>
//                         <th className='px-10 py-3 border border-b-gray-700  bg-gray-300'>status</th>
//                         {/* <th className='px-10 py-3 border border-b-gray-700  bg-gray-300'>Edit</th> */}
//                         <th className='px-10 py-3 border border-b-gray-700  bg-gray-300'>Delete</th>
//                     </tr>
//                     {
//                         todo?.map((ele)=>(
//                             <tr key={ele.id}>
//                                 <td className='px-10 py-3 border border-b-gray-700  bg-gray-300'>{ele.id}</td>
//                                 <td className='px-10 py-3 border border-b-gray-700  bg-gray-300'>{ele.text}</td>
//                                 <td className='px-10 py-3 border border-b-gray-700  bg-gray-300'><button onClick={()=> dispatch(handleStatus(ele.id))} >{ele.status ? "✅" : "❌"}</button></td> 
//                                 <td className='px-10 py-3 border border-b-gray-700  bg-gray-300'>
                             
//                                 </td>
//                                 <td className='px-10 py-3 border border-b-gray-700  bg-gray-300'><button onClick={() => dispatch(handleDelete(ele.id))}>🗑️</button></td>
//                             </tr>
//                         ))
//                     }
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default TodoList;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleDelete,
    handleStatus,
    toggleEditMode,
    setEditText,
    handleEdit
} from '../../redux/Action';

const TodoList = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="max-w-xl mx-auto my-10">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className='px-10 py-3 border bg-gray-300' >Id</th>
                            <th className='px-10 py-3 border bg-gray-300'>Todo</th>
                            <th className='px-10 py-3 border bg-gray-300'>Status</th>
                            <th className='px-10 py-3 border bg-gray-300'>Edit</th>
                            <th className='px-10 py-3 border bg-gray-300'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo?.map((ele) => (
                            <tr key={ele.id}>
                                <td className='px-10 py-3 border'>{ele.id}</td>
                                <td className='px-10 py-3 border'>
                                    {ele.isEditing ? (
                                        <input
                                            value={ele.editText}
                                            onChange={(e) =>
                                                dispatch(setEditText(ele.id, e.target.value))
                                            }
                                        />
                                    ) : (
                                        ele.text
                                    )}
                                </td>
                                <td className='px-10 py-3 border'>
                                    <button onClick={() => dispatch(handleStatus(ele.id))}>
                                        {ele.status ? '✅' : '❌'}
                                    </button>
                                </td>
                                <td className='px-10 py-3 border'>
                                    {ele.isEditing ? (
                                        <button onClick={() => dispatch(handleEdit(ele.id))}>
                                            💾
                                        </button>
                                    ) : (
                                        <button onClick={() => dispatch(toggleEditMode(ele.id))}>
                                            ✏️
                                        </button>
                                    )}
                                </td>
                                <td className='px-10 py-3 border'>
                                    <button onClick={() => dispatch(handleDelete(ele.id))}>
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;
