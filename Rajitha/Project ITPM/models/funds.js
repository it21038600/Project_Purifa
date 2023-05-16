const mongoose = require('mongoose');


const fundSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    area:{
        type:String,
        required:true
    },
    phvalue:{
        type:Number,
        required:true
    },
    dovalue:{
        type:String,
        required:true
    },

    conductivity:{
        type:String,
        required:true
    },
    watertemp:{
        type:String,
        required:true
    },
    areatemp:{
        type:String,
        required:true
    },

    



});

module.exports = mongoose.model('Funds',fundSchema);