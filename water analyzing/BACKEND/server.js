const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8085;

app.use(cors());
app.use(bodyParser.json());

const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!');
});


const userRouter = require("./routes/users.js");
app.use("/user",userRouter);

const parameterRouter = require("./routes/parameters.js");
app.use("/parameter",parameterRouter);

const analysesRouter = require("./routes/analysess.js");
app.use("/analyses",analysesRouter);


app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
