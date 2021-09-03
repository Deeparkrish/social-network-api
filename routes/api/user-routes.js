// Add dependencies 
const router = require('express').Router();
// import all the user operations from controller 
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend} =require('../../controllers/user-controller');

    // /api/Users
router.route('/')
.get(getAllUser)
.post(createUser);

// /api/Users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);



// /api/users/userId/friends/friendId
router
.route('/:id/friends/:friendId')
.post(addFriend)     // POST /api/users/:userId/friends/:friendId
.delete(removeFriend);     // DELETE /api/users/:userId/friends/:friendId


// Export the user route functions 
module.exports = router;