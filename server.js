require('./dbConfig/postgres')
require('./dbConfig/mongodb')
require('./dbConfig/sequelize')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routeserver = require('./router/routeserver');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json())
app.use(express.json())

app.use(routeserver);

app.listen(9800 ,()=> {
    console.log("Server is running on localhost 9800");
})



