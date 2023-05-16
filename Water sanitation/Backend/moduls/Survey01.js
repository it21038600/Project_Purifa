const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Survey01 = new Schema({

    email:{
        type:String,
        required: true
    },
    source:{
        type:String,
    },
    treated:{
        type: String
    },
    issues:{
        type: String
    },
    access:{
        type:String
    },
    sewage:{
        type:String
    },
    waterborne:{
        type:String
        
    },
    quality:{
        type: String
    },
    resources:{
        type: String
    },
    treatment:{
        type: String
    }
},{timestamps:true})


module.exports = mongoose.model("Survey01",Survey01);
