const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Personal_Infor_Schema = new Schema({

    name:{
        type:String,
        required: true
        
    },
    email:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    province:{
        type:String,
        required: true
    },
    district:{
        type:String,
        required: true
        
    },
    postal_code:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },
    household_size:{
        type:String,
        required: true
    },
    any:{
        type:String
    }
},{timestamps:true})


module.exports = mongoose.model("personal_information",Personal_Infor_Schema);
