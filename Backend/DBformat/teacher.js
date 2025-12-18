const db = require('../db')

const user = db.model("teacher",{
    username:{type:String, required: true},
    password:{type:String, required: true},
    status: String
})

DBformat.exports = teacher;