/*
Database to manage student records
*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://asamadifard:<db_password>@schooldb.tefffqw.mongodb.net/")

module.exports = mongoose;