// Add Dependencies 
const router = require('express').Router();
// import the thought operations from controller
const { addThought,
    removeThought,
    updateThought,
    getAllThoughts,
    getThoughtById, 
    addReaction,
    removeReaction } = require('../../controllers/thought-controller');

// '/api/thoughts    
router
.route('/')
.get(getAllThoughts);

///api/thoughts/:id
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought); 


// api/thoughts/:userId
router
.route('/:id')
.post(addThought);

//  /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction);

///api/thoughts/:thoughtId/reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;