import React, { useEffect, useRef,useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Todoitem from "./Todoitem";

const Todo = () => {

    // eslint-disable-next-line no-undef
    const [todos,setTodos] = useState([localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos'))  : [] ]);
    const data=useRef();
const addTodos= ()  =>{

    const inputText=data.current.value.trim();

    if(inputText===""){
        return null;
    }
 const newTodo ={
    id:todos.length +1,
    text:inputText,
    isComplete:false,
 };
 setTodos((prev) => [...prev,newTodo]);
};

const toggle = (id) => {
setTodos((prevTodos) => {
  return prevTodos.map((todo) => {
    if (todo.id === id){
        return {...todo,isComplete: ! todo.isComplete};
    }
 return todo;
   } );
});
};

const deleteTodo =(id) => {
setTodos((prevTodos) => {
return prevTodos.filter((todo) => todo.id !=id);
}  );
};



useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
}, [todos]);

  return (
    <div className='place-self-center bg-white w-[450px] h-[600px] p-12 flex flex-col gap-8 rounded-lg'>
    {/* başlık kısmı  */}    
<h1 className='text-3xl font-semibold tracking-wider flex justify-center items-center gap-2'><FaClipboardList />{" "}Todo App   </h1>

{/* Arama  kısmı  */}

<div  className='flex items-center bg-[#EEEEEE] p-1 rounded-full'>
    <input ref={data}
    type="text" className='border-none outline-none p-1 flex-1 bg-transparent'
    placeholder='Yeni bir görev gir' />
    <div className='bg-[#00ADB5] h-full w-14 flex items-center justify-center  rounded-r-full cursor-pointer'
     onClick={()=> addTodos()}>
<FaPlus className='size-6 text-[#EEEEEE]'/>
    </div>
    </div>

{/* Listelenen görevler */}
<div className='mt-5'>
   
 { todos.map((todo) => (
    <Todoitem key={todo.id} todo={todo} toggle={toggle}
    deleteTodo={deleteTodo}/>
   ))} 
   
</div>

    </div>
  );
};

export default Todo