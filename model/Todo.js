const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    title :{
        type: String,
        require: true
    },
    description :{
        type: String
    },
    completed :{
        type: String,
        require: false
    },
    createdAt :{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Todo", TodoSchema);