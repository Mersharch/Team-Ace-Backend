//requiring express
const express = require("express");

const mongoose = require('mongoose');

require('dotenv').config();

//express app
const app = express();

const cors = require('cors');


//definign port
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true,  useUnifiedTopology: true,});

const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB database connection established successfully"));


const userRouter = require('./routes/users');
const productRouter = require('./routes/productss');

app.use('/users', userRouter);
app.use('/products', productRouter);


//listening to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

