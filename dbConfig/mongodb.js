const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/react", {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
(err) => {
    if (!err) console.log("MongoDB Connected");
    else console.log("Error!");
});
