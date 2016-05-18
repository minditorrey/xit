var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
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


router.get('/', (req, res) => {
  Task.find({}, (err, tasks) => {
    res.status(err ? 400 : 200).send(err || tasks);
  });
});


router.route('/:email')
	.get((req, res) => {
		console.log(req.params.email)
		Task
		.find({assignedTo: req.params.email})
		.exec((err, tasks) => {
			console.log(tasks)
			res.status(err ? 400 : 200).send(err || tasks);
		})
	})


router.post('/updateProfile', stormpath.loginRequired, (req, res, test) => {
	console.log('req.body:', req.body);
	// console.log('res:', res);
	// console.log('test:', test);

	req.user.customData.profilePic = req.body.profilePic;
	req.user.customData.department = req.body.department;
	req.user.customData.supervisor = req.body.supervisor;
	req.user.customData.favoriteColor = req.body.favoriteColor;
	req.user.save((err, savedUser) => {
		console.log("YOU", savedUser)
	res.send(savedUser);
	})
})



module.exports = router;
