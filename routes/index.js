const router = require('express').Router(); // import express router 
const apiRoutes = require('./api');  // import api routes 

//Add prefix '/api' for apiroutes 
router.use('/api', apiRoutes);


// 404 error message 
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;