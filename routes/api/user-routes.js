// Add dependencies 
const router = require('express').Router();
// import all the user operations from controller 
const {getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser} =require('../../controllers/user-controller');

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

// router.route('/:id/friends/:friend')
// .put(addFriend)
// .delete(removeFriend)

// Export the user route functions 
module.exports = router;