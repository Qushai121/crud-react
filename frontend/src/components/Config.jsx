import axios from "axios"

export const getTodoList =async() => {

     const response = await  axios.get("http://localhost:8000/todo")
    return response.data
}

export const getTodoListId = async (id) =>{
    const response = await axios.get(`http://localhost:8000/todo/${id}`)
    return response.data
}


export const editTodoList = async (id,judul,isi) =>{
   try {
       await axios.patch(`http://localhost:8000/todo/${id}`,{
          judul,
          isi
      })
   } catch (error) {
        console.log(error)
   }
    
}

export const addTodoList = async (judul,isi) =>{
    console.log(judul)
    try {
        await axios.post(`http://localhost:8000/todo`,{
            judul,
            isi
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async (id)=> {
    try {
        await axios.delete(`http://localhost:8000/todo/${id}`)
        
    } catch (error) {
        console.log(error)
    }
}
