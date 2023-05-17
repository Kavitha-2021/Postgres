const Task = require("../models/model")

module.exports.getName = async (req, res) => {
    const data = await Task.findById(req.params.id)
    res.status(200).json({
        data,
       message: "success!!"
    })
}

module.exports.postName = async (req, res) => {
    var tasks = new Task({
        task: req.body.task,
    });
    await tasks.save();
    return res.json({ message: 'Successfully Saved' });
}

module.exports.putName = (req, res) => {
    Task.updateOne(
        { _id: req.params.id },
        { $set:  { task: req.body.task } }, (err) => {
            if (!err) res.send("Data Updated");
        })
}

module.exports.deleteName = (req, res) => {
    console.log(req.params.id);
    Task.deleteOne({ id: (req.params.id) }, (err, resp) => {
        res.send(resp);
    })
}

module.exports.getAll = async (req, res) => {
    var tasks = await Task.find()
    res.status(200).json({ data: tasks})
}


