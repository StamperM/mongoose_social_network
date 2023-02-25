const {Thought, User}= require('../../models/');


module.exports ={
//GET all users
getUsers(req,res){
    User.find()
    .then((users)=> res.json(users))
    .catch((err)=> res.status(500).json(err));
},


// GET a single user by its _id and populated thought and friend data

getOneUser(req,res){
    User.findById({ _id:req.params.userId})
    .then((user)=>
    !user
    ? res.status(404).json({message:'No user with that ID'})
    : res.json(user)
    )
    .catch((err)=> res.status(500).json(err))

},


// POST a new user
createSecureServer(req,res){
    User.create(req.body)
    .then((user)=> res.json(user))
    .catch ((err)=> {
        console.log(err);
        return res.status(500).json(err);
    })
},

// put update a user by its _id

// DELETE by its _id
deleteUser(req,res){
    User.findOneAndDelete({_id: req.params.userID})
    .then((user)=>
    !user
    ? res.status(404).json({message:'There is not matching Id'})
    : res.json(user))
    .catch((err)=> res.status(500).json(err))
}
//Remove a user's associated thoughts when deleted.
};