import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount } from '../../reduxToolkit/reducers/counterSlice';


const Counter = () => {

    let count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()



    return (
        <div className='max-w-7xl mx-auto my-10 text-center'>
      

            

<div class="inline-flex rounded-md shadow-xs" role="group">
  <button type="button" onClick={() => dispatch(incCount())} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    +
  </button>

   <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 border rounded border-gray-400 bg-white border-t border-b  focus:z-10 focus:ring-2 focus:ring-blue-700  ">
          {count}
   </button>

  <button type="button" onClick={() => dispatch(decCount())} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
   -
  </button>
</div>


        </div>
    );
}

export default Counter;