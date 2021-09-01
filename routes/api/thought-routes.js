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

// '/api/users/thoughts    
router.route('/').get(getAllThoughts);

///api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(removeThought); 


// api/thoughts/:userId
router.route('/:userId').post(addThought);

//  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(addReaction);

///api/thoughts/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;