import React from 'react'
import { FaRegCircle,FaRegTrashAlt ,FaRegCheckCircle } from "react-icons/fa";



const Todoitem = ({todo, toggle,deleteTodo}) => {
  return (
    <div className='w-full  flex items-center px-2  gap-2 
    border-b py-4 cursor-pointer select-none'
    onClick={()=> toggle(todo.id)}>

{todo.isComplete ? (  
  <FaRegCheckCircle className="text-[#00ADB5] size-5" />  
) : (  
  <FaRegCircle className="text-[#00ADB5] size-5" />  
)}

     <p className={`flex-1 ${todo.isComplete ? 'line-through': ''}`}>{todo.text}</p>

<FaRegTrashAlt  className='text-[#e01056] size-5 hover:scale-110 transition-all'
onClick={()=>deleteTodo(todo.id)} />

    </div>
  )
}

export default Todoitem
