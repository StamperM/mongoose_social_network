const router = require('express').Router();
const {getThoughts,
    singleThought,
    createtNewThought,
    updateThoughtByOne,
    deleteThought,
    createReaction,
    deleteReaction,
    }= require('../../controlers/thoughtsController');
    
    // api/thoughts
    router.get('/',getThoughts)
    .post('/',createtNewThought);
   
    router
    .get('/:thoughtid',singleThought)
    .put('/:thoughtid',updateThoughtByOne)
    .delete(deleteThought)

    router.route('/:thoughtId/reaction')
    .post(createReaction);


    router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

    module.exports = router;