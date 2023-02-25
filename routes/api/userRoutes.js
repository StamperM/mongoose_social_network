const router = require('express').Router();
const {getUsers,
getOneUser,
createUser,
deleteUser} = require('../../controlers/userController');

// user api
router.route('/').get(getUsers);

//user by id
router.route('/:userId').get(getOneUser).post(createUser).delete(deleteUser);

module.exports =router;