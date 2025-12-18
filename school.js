/*
mongodb+srv://asamadifard:<db_password>@schooldb.tefffqw.mongodb.net/
*/
const express = require('express');
const School = require("./backend/courseDB")
var cors = require('cors');



const school = express();
school.use(cors())

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

//if i want to grab a single song i can use the query parameters to do so....
//i am going to use what we call a router parameter to say that 'hey backend, this part of the url can change and will be grabbed from the front end'
router.get("/songs/:id", async(req,res) =>{
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch(err){
        res.status(400).send(err)

    }
})

router.post("/auth", async(req,res){
    if(!req.body.username || !req.body.password){
        res.status(400).json({error: "Missing username or password"})
        return
})
    await user.findOne({username: req.body.username}, function(err,user){
        if(err){
            res.status(400).send(err)
        
        else if(!user){
            res.status(401).json({error: "Invalid username or password"})
        }}else{
            if(user.password != req.body.password){
                res.status(401).json({error: "bad password"})
        }else{
            username2 = user.username
            const token = jwt.encode({username: user.username},secret)
            const auth = 1

            //respond with the token
            res.json({
                username2,
                token: token,
                auth: auth
            })
        }
    })
}

router.get("/status", async(req,res)=>{
    if(!req.headers["x-auth"]){
        return res.status(401.json({error: "missing x-auth"}))

    }
})

const token = req.headers["x-auth"]
try{
    const decoded = jwt.decode(token,secret)

    let Users = User.find({},"username status")
    res.json(Users)
}catch(ex){
    res.status(401).json({error: "invalid jwt"})
}

router.post("/auth", async(req,res)=>{
    if(!req.body.username || !req.body.password){
        res.status(400).json({error: "Missing username or password"})
        return
})
    await user.findOne({username: req.body.username}, function(err,user){
        if(err){
            res.status(400).send(err)
        
        else if(!user){
            res.status(401).json({error: "Invalid username or password"})
        }}else{
            if(user.password != req.body.password){
                res.status(401).json({error: "bad password"})
        }else{
            username2 = user.username
            const token = jwt.encode({username: user.username},secret)
            const auth = 1

            //respond with the token
            res.json({
                username2,
                token: token,
                auth: auth
            })
        }
    })
}

router.get("/status", async(req,res)=>{
    if(!req.headers["x-auth"]){
        return res.status(401.json({error: "missing x-auth"}))

    }
})

const token = req.headers["x-auth"]
try{
    const decoded = jwt.decode(token,secret)

    let Users = User.find({},"username status")
    res.json(Users)
}catch(ex){
    res.status(401).json({error: "invalid jwt"})
}

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

router.delete(delete("/school/:id",async(req,res)=>{
    try{
    School.deleteOne({_id: req.params.id})
    }
    catch{
        res.status(400).send(err);
    }
})

router.post("/songs", async(req,res)=>{
    try{
        const school = await new School(req.body)
        await school.save
        res.status(201).json(school)
        console.log(school)
    }catch{
        res.status(400).send(err)
    }
})

school.use("/api",router)
const PORT = process.env.PORT || 3000;

school.listen(PORT,()=>{
    console.log("listening");
})