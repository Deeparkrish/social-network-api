//Add dependencies
const router = require('express').Router();
// import the uservand thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Add '/users' to user routes 
router.use('/users', userRoutes);
//add '/thoughts' to thought routes 
router.use('/thoughts', thoughtRoutes);

// export the  api routes module 
module.exports = router;
