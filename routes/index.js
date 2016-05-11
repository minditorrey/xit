var express = require('express');
var router = express.Router();
var path = require('path');
var stormpath = require('express-stormpath');

/* GET home page. */
router.get('/', (req, res) => {
  var indexPath = path.join(__dirname, '../view/index.html');
  res.sendFile(indexPath);
});

// router.get('/home', stormpath.getUser, function (req, res) {
//   if (req.user) {
//     res.send('Hello, ' + req.user.email);
//   } else {
//     res.send('Not logged in');
//   }
// });

module.exports = router;