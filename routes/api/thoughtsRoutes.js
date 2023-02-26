const router = require('express').Router();
const {getThoughts,
    // getUserThought,
    createtNewThought,
    // updateThoughtByID,
    // deleteThought,
    // createReaction,
    }= require('../../controlers/thoughtsController');
    
    
    router.route('/')
    .get(getThoughts)
    .post(createtNewThought)
   
    // router.route('/:thoughtid')
    // .get(getUserThought)
    
    // .put(updateThoughtByID)
    // .delete(deleteThought)

    // router.route('/:thoughtId/reaction')
    // .post(createReaction)


    // router.route('/:thoughtId/reaction/:reactionId')

    module.exports = router;