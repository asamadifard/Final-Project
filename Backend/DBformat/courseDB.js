const { type } = require("os")
const db = require("../studentDB")


const School=db.model("School",{
    courseName: {type: String, required: true},
    instrMethod: String,
    slots: {type: Number, min:1, max:20},
    hourStart:{type:Date},
    hourEnd:{type:Date},
    dayOfWeek: [String],
    calStartDate:{type:Date},
    calEndDate:{type:Date},
    instructor:{type:String}

})

module.exports=School