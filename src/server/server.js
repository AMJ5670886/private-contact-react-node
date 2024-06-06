const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type');
    next();
});

app.use('/api/v1/',contactRoutes);
app.use((req,res,next)=>{
    res.status(404).json({message: 'Page not found'});
})
app.use((error,req,res,next) => {
    const message = error.message;
    const status = error.statusCode || 500;
    const data = error.data;
    res.status(status).json({message: message,data: data});
})

mongoose.connect(process.env.MONGOURL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`server is running on PORT:${process.env.PORT}`);
        });
    })
    .catch(err=>{
        console.log('db not connected')
    })


