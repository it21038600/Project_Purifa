const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8069

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
})

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection success!")
})

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
})

const person = require('./routers/Personal_infor.js');
app.use("/person",person);

const survey01 = require('./routers/Survey01.js');
app.use("/survey01",survey01);

const survey02 = require('./routers/Servey02.js');
app.use("/survey02",survey02);