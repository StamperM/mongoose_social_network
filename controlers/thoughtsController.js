const  {Thought, User} = require("../models");

module.exports = {
  // GET to get all thoughts
  getThoughts(req, res) {
    console.log("here", JSON.stringify({ Thought }, null, 2))



    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
   },

  // GET to get a single thought by its _id
  singleThought(req, res) {
    Thought.findByOne({ _id: req.parms.thoughtId })
    .select('-__v')
    .then((thought) =>
        !thought
          ? res.json(404).json({ message: "not a valid thought" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createtNewThought(req, res) {
   Thought.create(req.body)
      .then((thought) => 
  
      res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  // PUT to update a thought by its _id
  updateThoughtByOne(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId }, { thought: req.body })
      .then((updatedThought) =>
        !updatedThought
          ? res.status(400).json({ message: "There is not thought to update." })
          : res.json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // DELETE to remove a thought by its _id

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id }).then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought to delete." })
        : User.findOneAndUpdate(
            { username: thought.username },
            { $pull: { Thoughts: { _id: req.params.id } } },
            { new: true, runValidators: true }
          )
            .then((thought) => {
              res.json({ message: "That thought has been deleted. " });
            })
            .catch((err) => res.status(500).json(err))
    );
  },


// /api/thoughts/:thoughtId/reactions



// POST to create a reaction stored in a single thought's reactions array field
createReaction(req,res){
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet:{reaction:req.body}},
        { new:true}
    )
    .then((reaction)=>
    !reaction
    ?res.status(404).json({message:'Your reaction was not added.'})
    : res.json(reaction)
    )
    .catch((err)=> res.status(500).json(err));
},

// DELETE to pull and remove a reaction by the reaction's reactionId value
deleteReaction(req,res){
  Thought.findOneAndUpdate(
    { _id: req.parms.thoughtId},
     {$pull:{reaction:{reactionId:req.params.reactionId}}},
     {runValidators:true,new:true}
  )
  .then((thought)=>
  !thought
  ?res.status(404).json({message:"no thought with that ID"})
  :res.json(thought))
  .catch((err)=> res.status(500).json(err));
},

};