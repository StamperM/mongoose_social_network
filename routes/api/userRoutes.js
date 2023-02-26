const router = require('express').Router();
const {getUsers,
getOneUser,
createUser,
deleteUser} = require('../../controlers/userController');

// user api
router.route('/').get(getUsers)
.post(createUser);

//user by id
router.route('/:userId')
.get(getOneUser)
.delete(deleteUser);

module.exports =router;