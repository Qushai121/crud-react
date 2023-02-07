import sequelize from "sequelize"
 
export const db = new sequelize('todoreactcoy','root','',{
    host:"localhost",
    dialect:"mysql"
}) 