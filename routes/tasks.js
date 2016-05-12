var express = require('express');
var router = express.Router();

var Task = require('../models/task');


// Do Crud Things:
router.get('/', (req, res) => {
  Task.find({}, (err, tasks) => {
    res.status(err ? 400 : 200).send(err || tasks);
  });
});

router.post('/', (req, res) => {
  Task.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/:id')
  .put((req, res) => {
    Task.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, task) => {
      res.status(err ? 400 : 200).send(err || task);
    })
  })
  .delete((req, res) => {
    var task = (req.body)
    Task.findByIdAndRemove(req.params.id, (err, task) => {
      res.status(err ? 400 : 200).send(err);
    })
  })

router.route('/:email')
  .get((req, res) => {
  	var currentUser = req.body;
  	console.log('currentUser:', currentUser);
  	Task.find({"email": currentUser}, (err, tasks) => {
  		res.status(err ? 400 : 200).send(err || tasks);
  	})
  })

router.get('/', (req, res) => {
  Task.find({}, (err, tasks) => {
    res.status(err ? 400 : 200).send(err || tasks);
  });
});


module.exports = router;