import sequelize from "sequelize";
import { db } from "../config/database.js";

const {DataTypes} = sequelize

const Todos = db.define('todosList',{
    'judul':DataTypes.STRING,
    'isi':DataTypes.STRING,
},{freezeTableName:true})

export default Todos;

(async()=>{
    await db.sync();
})
();