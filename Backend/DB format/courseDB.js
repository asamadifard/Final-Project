const { type } = require("os")
const db = require("../db")


const course=db.model("Course",{
    courseName: {type: String, required: true},
    instrMethod: String,
    slots: {type: Number, min:1, max:20},
    hourStart:{type:date},
    hourEnd:{type:date},
    dayOfWeek:[String],
    calStartDate:{type:date},
    calEndDate:{type:date},
    instructor:{type:String}

})

module.exports=course