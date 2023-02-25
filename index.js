const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const monggoose = require('mongoose');

const PORT = process.process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded)(({extedned:true}));
app.use(express.json());
app.use(routes);



db.once('open',()=> {
    console.log(`API Server is running on port${PORT}.`)
});