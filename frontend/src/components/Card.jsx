import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import trash from "../assets/trash-solid.svg";
import pen from "../assets/pen-solid.svg";
import check from "../assets/check-solid.svg";
import xmark from "../assets/xmark-solid.svg";
import grip from "./assets/Grip.svg";
import { motion } from "framer-motion";
import axios from "axios";
import { getTodoList } from "./Config";

const Card = ({ index,todos }) => {
  console.log(todos.id)
  console.log('aaa')
 
  const [isActive, setIsActive] = useState(false);
  const [muncul, setMuncul] = useState(false);
  const handleClick = () => {
    setIsActive((state) => !state);
  };
  const handleMuncul = () => {
    setMuncul((state) => !state);
  };
  
  const deleteTodos = async (id) =>{
    window.location.reload();
    try {
      await axios.delete(`http://localhost:8000/todo/${id}`)
      console.log(id)
      getTodoList()
  } catch (error) {
      console.log(error)
  }
     
    
  }
 
 

  return (
    <div key={index} >
      <div className="" >
        <div className=" h-9 ">{todos.judul}</div>
        <div className="flex max-h-fit justify-between overflow-x-hidden">
          <div
          style={{
            textDecoration: isActive ? 'line-through':'none',
            marginRight:muncul ? '0px':'-98px'
          }}
          className="overflow-y-scroll scrollbar-hide w-[100vw] duration-300 bg-slate-500 flex justify-between">
           <div className=" w-3/4 mx-1 break-words pb-2  " >
            {todos.isi}
           </div>
            
          <div
          onClick={handleMuncul}
              style={{ backgroundImage: `url(${grip})`,
              marginRight:muncul ? '10px':'0px'
               }}
              className="w-6 my-auto animate-pulse duration-300 h-8 bg-no-repeat"
            ></div>

          </div>

         
          <div 
          className=" duration-300my-auto flex "
          style={{
          transform: muncul ? 'translate(0px, 0px)' : 'translate(90px, 0px)'
          }}
          >

            <div
              onClick={handleClick}
              style={{
                backgroundImage: isActive ? `url(${xmark})`  : `url(${check})`,
                backgroundRepeat:'no-repeat',
                marginLeft:'10px'
              }}
              className="w-6 h-6 my-auto rounded-full duration-200"
            >
             
            </div>


            <Link to={`/edit/${todos.id}`}
              style={{ backgroundImage: `url(${pen})` }}
              className="w-6 h-6 my-auto ml-2 "
            ></Link>


            <div
            onClick={()=>deleteTodos(todos.id)}
              // style={{ backgroundImage: `url(${trash})`,
                  
              //  }}
              className="w-6 h-6 my-auto ml-2 hover:fill-red-600 bg-no-repeat "
            >
            {/* mencoba langsung pake svgnya */}
            {/* kelebihannya bisa di buat animasi pake framer motion dan warna bisa ubah pake fill */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
