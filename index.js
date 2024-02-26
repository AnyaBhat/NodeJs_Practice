const express = require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys')
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app=express();

//returns a function with a callback function 
require('./routes/authRoutes')(app); 

const PORT=process.env.PORT ||5000; 
app.listen(PORT);

