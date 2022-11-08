const book = require("../models/model")

module.exports.getName = async (req, res) => {
    //return res.send("Running in controller");
    const data = await book.findById(req.params.id)
    res.status(200).json({
        data,
       message: "success!!"
    })
}

module.exports.postName = async (req, res) => {
    var books = new book({
        name: req.body.name,
        age: req.body.age,
    });
    await books.save();
    return res.json({ message: 'Successfully Saved' });
}

module.exports.putName = (req, res) => {
    book.updateOne(
        { name: "abdc" },
        { $set: (req.body) }, (err) => {
            if (!err) res.send("Data Updated");
        })
}

module.exports.deleteName = (req, res) => {
    console.log(req.params.id);
    book.deleteOne({ id: (req.params.id) }, (err, resp) => {
        res.send(resp);
    })
}


