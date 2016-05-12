'use strict';

var mongoose = require('mongoose');


var taskSchema = new mongoose.Schema({
  description: {type: String},
  assignedBy: {type: String},
  assignedTo: {type: String},
  dueBy: {type: String},
  priority: {type: String},
  progress: {type: String},
  completedAt: {type: String}
});



var Task = mongoose.model('Task', taskSchema);

module.exports = Task;