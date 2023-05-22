const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const analysesrSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    number: {
        type : String,
        required: true
    },
    ph: {
        type : String,
        required: false
    },

    do: {
        type : String,
        required: false
    },
    conductivity: {
        type : String,
        required: false
    }
    





})

const analyses = mongoose.model("analyses",analysesrSchema);

module.exports = analyses;
