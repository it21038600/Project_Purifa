const mongoose = require('mongoose');


const donationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    tdate:{
        type:Date,
        required:true
    },
    selectedUnit:{
        type:String,
        required:true
    }


    
});

module.exports = mongoose.model('Donations',donationSchema);