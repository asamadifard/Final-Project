/*
mongodb+srv://asamadifard:<db_password>@schooldb.tefffqw.mongodb.net/
*/


const express = require('express');
const router = express.Router();
var cors = require('cors');

const school = express();

school.use(express.json());

express.Router()

//variable to check if teacher or student
let isTeacher = true;


school.use("/api",router);
const PORT = process.env.PORT || 3000;

school.listen(PORT,()=>{
    console.log("listening");
})