const express = require('express');
require('./services/passport');

const app=express();

//returns a function with a callback function 
require('./routes/authRoutes')(app); 

const PORT=process.env.PORT ||5000; 
app.listen(PORT);

