import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCount, incCount, resCount } from '../redux/Action'
import { store } from '../redux/Store'

const Counter = () => {
let storeCount = useSelector((store)=>store.count)
const dispatch = useDispatch()

console.log(store)
  return (
    <>
<div className=' p-3'>
 <span className="bg-indigo-100 text-indigo-800 font-medium me-2 px-2.5 py-0.5 rounded-sm ml-6 text-2xl dark:bg-indigo-900 dark:text-indigo-300">{storeCount}</span>

    <div className='mt-5 ml-6'>
        
    <button type="button" onClick={()=>dispatch(incCount())} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">➕</button>
    <button type="button" onClick={()=>dispatch(decCount())} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">➖</button>
     <button type="button" onClick={()=>dispatch(resCount())} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">🔃</button>
  
    </div> 
</div>


 </>
  )
}   

export default Counter