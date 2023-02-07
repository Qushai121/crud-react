import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTodoList } from "./Config";

const AddTodo = () => {
  const navigate = useNavigate()
    
    const[judul,SetJudul] = useState(true)
    const[isi,SetIsi] = useState(true)
    const[popOut,setPopOut] = useState(true)

  
    
    const tambahkan = () =>{
      setPopOut((state) => !state)
    }

   
    const addDataTodo = async (e) => {
      setPopOut((state)=>!state)
      e.preventDefault()
      window.location.reload();
      try {
        await addTodoList(judul,isi)
        navigate('/')
        
      } catch (error) {
        console.log(error)
      }
    }
   

  return (
    <div>
      <div>
        <div className="flex justify-center mt-3 ">
          <div className="flex-col text-center mt-2">
          <button 
          onClick={tambahkan}
          
          className="my-3 border-red-300 border-2 rounded-lg "> {popOut ? "tambahkan Todo" : "Tutup"}  </button>

          {!popOut ?  
          <form onSubmit={addDataTodo} >
              <label htmlFor="judul">Tambah Judul</label>
              <br />
              <input
                onChange={(e) => SetJudul(e.target.value)}
                type="text"
                name="judul"
                className="bg-slate-500 w-60 h-10"
                id=""
              />
              <br />
              <label htmlFor="isi">Tambah ISI</label>
              <br />
              <textarea
                onChange={(e) => SetIsi(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-slate-500"
              ></textarea>
              <br />
              <button
                type="submit"
                className="bg-slate-500 w-44 h-11 rounded-2xl mt-6"
              >
                Tambah
              </button>
            </form> : <> </>}
            {/* kondisi ? true : false */}
            {/* Jika tambahkan todo false  muncul jika sebaliknya ilang*/}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
