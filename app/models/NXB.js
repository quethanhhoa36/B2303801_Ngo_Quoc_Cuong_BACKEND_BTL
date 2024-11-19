const mongoose = require('mongoose');

const NXBSchema = new mongoose.Schema({
    NXB:{
        type: String,
        require: true,
    },
    diachi:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("NXB",NXBSchema)