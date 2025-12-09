/*
mongodb+srv://asamadifard:<db_password>@schooldb.tefffqw.mongodb.net/
*/

const School = require("./Backend/DBformat/courseDB")
const express = require('express');
const router = express.Router();
var cors = require('cors');

const school = express();

school.use(express.json());

express.Router()

//variable to check if teacher or student
let isTeacher = true;
//grab all items in DB
router.get("/schoolDB", async(req,res) =>{
    try{
        const school = await School.find({});
        res.send(school);
        console.log(school);
    }
    catch(err){
        console.log(err);
    }
})

//grabs backend from the front end
router.get("schoolDB/:id", async(req,res)=>{
    try{
        const school = await School.findById(req.params.id);
        res.json(school);
    }
    catch(err){
        res.status(400).send(err);
    }
})
//updates or edits a record. we need an existing record to update it based on ID
router.put("/schoolDB/:id",async(req,res)=>{
    try{
        const school = req.body;
        await school.updateOne({id: req.params.id},school);
        res.sendStatus(204);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//deletes a record
router.delete("/delete/:id",async(req,res)=>{
    try{
        const result = await School.deleteOne({id: req.params.id});
        if(result.deleteCount===0){
            res.sendStatus(404);
        }
        else{
            res.sendStatus(204);
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})

//add a record and get it to a form eventually
router.post("/schoolDB", async(req,res)=>{
    try{
        const school = await new School(req.body);
        await school.save()
        res.status(201).json(school)
        console.log(school);
    }
    catch(err){
        res.status(400).send(err);
    }
})

school.use("/api",router);
const PORT = process.env.PORT || 3000;

school.listen(PORT,()=>{
    console.log("listening");
})