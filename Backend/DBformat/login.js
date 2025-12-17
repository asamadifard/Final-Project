const db = require("../db")

const Login = db.model("Instructor",{
    username:{type: String, required:true},
    password:{type: String, required:true},
    status:String
})

model.exports = Login