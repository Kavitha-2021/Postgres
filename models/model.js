const mongoose = require('mongoose');

const taskShema = new mongoose.Schema({
    task: String,
});


var Task = mongoose.model("Task", taskShema);


module.exports = Task;

