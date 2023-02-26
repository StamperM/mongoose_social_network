const router = require('express').Router();
// const friends = require("./friendsRoutes");
const thoughts =require('./thoughtsRoutes');
const users = require('./userRoutes')

router.use('/thoughts',thoughts);
router.use('/users', users);
//router.use('/friends', friends);
router.use((req, res)=> res.send("wrong route!"));



module.exports = router;