import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todolist from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="bg-gray-600" >
     <h1 className="text-2xl text-center">Selamat Datang Di Todo List</h1>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Todolist />} />
          <Route path="/edit/:id" element={ <EditTodo/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
