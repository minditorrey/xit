var express = require('express');
var router = express.Router();

var Task = require('../models/task');


// Do Crud Things:
router.get('/', (req, res) => {
  Profile.find({}, (err, profiles) => {
    res.status(err ? 400 : 200).send(err || profiles);
  });
});

router.post('/', (req, res) => {
  Profile.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});



module.exports = router;