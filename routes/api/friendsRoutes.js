const router = require('express').Router();
const {getThoughts,
getUserThought,
createtNewThought,
updateThoughtByID,
deleteThought,
createReaction,
}= require('../../controlers/thoughtsController');


router.route('/')
.get(getThoughts)
.post(createtNewThought, createReaction)
.update(updateThoughtByID).delete(deleteThought)

module.exports = router;