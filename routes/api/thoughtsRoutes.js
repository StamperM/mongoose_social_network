const router = require('express').Router();
const{
    getThoughts,
    getUserThought,
    createtNewthought,
    updateThoughtByID,
    deleteThought,
    createReaction,
}= require('../../controlers/thoughtsController')

module.exports = router;