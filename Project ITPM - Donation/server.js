const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const donationRoutes = require('./routes/donations');


app.use(bodyParser.json());
app.use(cors());

app.use(donationRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://pamod:pamod123@donation.7j1l157.mongodb.net/donation?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology :true

})

.then(()=>{
    console.log('db connected');
})
.catch((err) => console.log('DB connection error',err));
 
app.listen(PORT,() =>{
    console.log('App is running ');
});