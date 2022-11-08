const express = require('express');
const Route = express.Router();
const controlserver = require('../controller/controlserver');

Route.get('/name/:id', controlserver.getName);

Route.post('/details', controlserver.postName);

Route.put('/', controlserver.putName)

Route.delete('/clear/:id', controlserver.deleteName);

module.exports = Route;

// Route.get('/login',controlserver.log);

// Route.get('/mailid',controlserver.mail);



