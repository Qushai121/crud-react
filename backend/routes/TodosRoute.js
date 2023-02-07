import  express  from "express";
import { createTodoList, deleteTodoList, EditTodoList, getTodoList, getTodoListById } from "../controller/TodosController.js";


 export const routes = express.Router();

routes.get('/todo',getTodoList)
routes.get('/todo/:id',getTodoListById)
routes.post('/todo',createTodoList)
routes.patch('/todo/:id',EditTodoList)
routes.delete('/todo/:id',deleteTodoList)