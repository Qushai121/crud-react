import React, { useEffect, useState } from "react";
import { editTodoList, getTodoListId } from "./Config";
import { useNavigate, useParams } from "react-router-dom";

const EditTodo = () => {
    // Ini cara ambil id pake params cuy
    const { id } = useParams();

    const [todoId, SetTodoId] = useState([]);
    const [judul, SetJudul] = useState([]);
    const [isi, SetIsi] = useState([]);
    
   const navigate = useNavigate()
   

  useEffect(() => {
    ambilId();
}, []);


  const editTodos = async (e)=>{
  // kirimkan hasil inputan ke file config pake argumen
  e.preventDefault()
  try {
    editTodoList(id,judul,isi)
    navigate("/")
    window.location.reload();
  //  setalah itu kirim kan kita ke path "/"
     } catch (error) {
      console.log(error)
     }
   
  }

const ambilId = async () => {
    // lirim id pakai useParams ke getTodoListId melalui argument
    SetTodoId(await getTodoListId(id));
    SetJudul(todoId.judul)
    SetIsi(todoId.isi)
};



  return (
  <div>
   <div className="flex-col text-center mt-9" >
   <form onSubmit={editTodos}>

    <label htmlFor="judul">Edit Judul</label>
    <br />
    <input 
    onChange={(e)=>SetJudul(e.target.value)}
    type="text" name="judul" className="bg-slate-500 w-60 h-10" id="" /><br />
    <label htmlFor="isi">Edit ISI</label><br />
    <textarea 
    onChange={(e)=>SetIsi(e.target.value)}
    name="" id="" cols="30" rows="10" className="bg-slate-500" ></textarea><br />
    <button 
   
    type="submit" className="bg-slate-500 w-44 h-11 rounded-2xl mt-6" >Edit</button>
   </form>
   </div>
  
  </div>);
};

export default EditTodo;
