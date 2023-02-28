const router = require('express').Router();
const {getUsers,
getOneUser,
updateUserbyID,
createUser,
deleteUser,
addFriend} = require('../../controlers/userController');

// user api
router.route('/').get(getUsers)
.post(createUser);

//user by id
router.route('/:userId')
.get(getOneUser)
.delete(deleteUser).put(updateUserbyID);


router.route('/:userId/friends/:friendId').post(addFriend);
module.exports =router;