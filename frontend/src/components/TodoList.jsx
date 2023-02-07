import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Card from "./Card";
import { editTodoList, getTodoList } from "./Config";
import Search from "./Search";


const TodoList = () => {
  const [todosDatas, setTodosDatas] = useState([]);
  const[search,setseach] = useState ("")

  useEffect(() => {
    
    Todos();
    
  },[]);



  const Todos = async () => {
    setTodosDatas(await getTodoList());
  };
  
  // console.log(todosDatas)
  const searchTodo = (e)=>{
    setseach(e)
  }

  
  return (
    <div>
    
      <div>
      <div className="bg-teal-300 " >

     <Search searchTodo={searchTodo} />
      </div>
       {/* {todosDatas.map((todos)=>(
        <>
        <div className="md:w-96 mx-auto" >

        <Card index={todos.id} todos={todos} />
        </div>

        </>
       ))}
       <AddTodo/> */}
       {todosDatas.filter((hasil)=>{
        
        if(search === ""){
          return hasil
        }
       
        else if(hasil.judul.toLowerCase().includes(search.toLowerCase())){
          return hasil
        }
       }).map((todos)=>{
        return(
          <>
       
        <div className="md:w-96 mx-auto rounded-full" >

        {/* {todos.id === search ?  <Card index={search} todos={todos} /> : <Card index={todos.id} todos={todos} /> } */}
        <Card index={todos.id} todos={todos} />
        </div>

        </>
        )
       })
       
       
       }
       
       
       <AddTodo/>
      </div>
    </div>
  );
};

export default TodoList;
