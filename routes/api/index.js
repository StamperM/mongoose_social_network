const router = require('express').Router();
// URLs
// const friends = require("./friendsRoutes");
const thoughts =require('./thoughtsRoutes');
const users = require('./userRoutes')

router.use('/thoughts',thoughts);
router.use('/users', users);
//router.use('/friends', friends);




module.exports = router;