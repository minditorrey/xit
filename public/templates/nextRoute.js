var express = require('express');
var router = express.Router();

var Model = require('../models/model');

//Do Crud Things:



router.route('/')
	.get((req, res) => {
		Model.find({}, (err, things) => {
			res.status(err ? 400 : 200).send(err || things);
		});
	})