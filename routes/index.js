const router = require('express').Router(); // import express router 
const apiRoutes = require('./api');  // import api routes 
//const htmlRoutes = require('./html/html-routes'); // import html routes 

//Add prefix '/api' for apiroutes 
router.use('/api', apiRoutes);
//add prefix / to html routes 
//router.use('/', htmlRoutes);

// 404 error message 
router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;