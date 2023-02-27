const express = require('express');
// access to config file
const db = require('./config/connection');
// access to router file
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();
// allows to use json for post and deletes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use router file
app.use(routes);


// server listening
db.once('open',()=> {
    app.listen(PORT, ()=>{
    console.log(`API Server is running on port ${PORT}.`)
});
});