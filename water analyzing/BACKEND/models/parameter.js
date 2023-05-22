const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parameterSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    ph : {
        type : Number,
        required:true
    },
    do : {
        type : Number,
        required:true
    },
    conductivity : {
        type : Number,
        required:true
    }


})

const parameter = mongoose.model("parameter",parameterSchema);

module.exports = parameter;

