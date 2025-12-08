const express = require('express');
const router = express.Router();
var cors = require('cors');

const school = express();



school.use("/api",router);
const PORT = process.env.PORT || 3000;

school.listen(PORT,()=>{
    console.log("listening");
})