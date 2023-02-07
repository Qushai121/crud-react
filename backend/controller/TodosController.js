import Todos from "../models/TodoModels.js";

export const getTodoList = async(req,res)=>{
    try {
        const response = await Todos.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const getTodoListById = async(req,res)=>{
    try {
        const response = await Todos.findOne({
            where:{
                id:req.params.id
            }
        })
       res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const createTodoList = async(req,res)=>{
    try {
        await Todos.create(req.body)
        res.status(200).json({pesan:"Todo Berhasil Di buat"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodoList = async(req,res)=>{
    try {
        await Todos.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({pesan:"Todo Berhasil DI Hapus"})
    } catch (error) {
        console.log(error)
    }
}

export const EditTodoList = async(req,res)=>{
    try {
        await Todos.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({pesan:"Todo Berhasil DI Edit "})
    } catch (error) {
        console.log(error)
    }
}