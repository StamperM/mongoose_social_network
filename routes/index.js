const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((err,req,res,next)=> {
    console.log(err);
return res.status(500).send("Wrong Way turn around!")
});

module.exports = router;
