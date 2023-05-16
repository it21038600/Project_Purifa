const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Survey02 = new Schema({

    email:{
        type:String,
        required: true
    },
    water_supply:{
        type:String,
    },
    use:{
        type: String
    },
    clean:{
        type: String
    },
    steps:{
        type:String
    },
    tested:{
        type:String
    },
    improvements:{
        type:String
        
    },
    satisfied:{
        type: String
    }
},{timestamps:true})


module.exports = mongoose.model("Survey02",Survey02);
