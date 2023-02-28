const {User}= require('../models');


module.exports ={
//GET all users
getUsers(req,res){
    User.find()
    .then((users)=> res.json(users))
    .catch((err)=> res.status(500).json(err));
},


// GET a single user by its _id and populated thought and friend data

getOneUser(req,res){
    console.log("here")
    console.log(req.params);
    console.log(req.params.userId)

    User.findOne({ _id:req.params.userId})
    .select('-__v')
    .populate(['thoughts','friends'])
    .then(async(user)=>
    !user
    ?res.status(404).json({message:"No user matches that ID"})
    :res.json({user}
        )
    )
    .catch((err)=> {
        console.log(err);
        return res.status(500).json(err);
    });

},


// POST a new user
createUser(req,res){
    User.create(req.body)
    .then((user)=> res.json(user))
    .catch ((err)=> {
        console.log(err);
        return res.status(500).json(err);
    })
},

// put update a user by its _id

updateUserbyID(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, { $set: req.body },{new:true})
      .then((updatedUser) =>
        !updatedUser
          ? res.status(400).json({ message: "There is not a user to update." })
          : res.json(updatedUser)
      )
      .catch((err) => res.status(500).json(err));
  },

// DELETE by its _id
deleteUser(req,res){
    User.findOneAndDelete({_id: req.params.userId})
    .then((user)=>
    !user
    ? res.status(404).json({message:'There is not matching Id'})
    : res.json(user))
    .catch((err)=> res.status(500).json(err))
    
},
//Remove a user's associated thoughts when deleted.

// add user to friends list
addFriend(req,res){
    console.log(req.params)
    User.findOneAndUpdate({_id:req.params.userId},
        {$addToSet:{friends:req.params.friendId}},
        {new:true} 
        )
        .then((friends)=> 
            !friends
            ? res
            .status(404)
            .json({ message: 'No student found with that ID :(' })
        : res.json(friends)
        )
    .catch((err) => res.status(500).json(err));
},
      



};