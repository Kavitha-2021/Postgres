const express = require('express');
const Route = express.Router();
const controlserver = require('../controller/controlserver');
const controlpostgres = require('../controller/controlpostgres');
const controlsequel =  require('../controller/controlsequel');

const User = require('../models/usermodel')
const userservice = require('../service/Userservice')

//mongodb
Route.get('/name/:id', controlserver.getName);
Route.post('/details', controlserver.postName);
Route.put('/update/:id', controlserver.putName)
Route.delete('/clear/:id', controlserver.deleteName);
Route.get('/all', controlserver.getAll);

//postgresql
Route.post('/create', controlpostgres.createUser )
Route.post('/update/:id', controlpostgres.updateUser)
Route.delete('/delete/:id', controlpostgres.deleteUser)
Route.get('/user/:name', controlpostgres.getUser)
Route.get('/userlist', controlpostgres.getAllUser)
Route.get('/list', controlpostgres.getLimitSortUser)

//Sequelize with postgress
Route.post('/postcreate', controlsequel.createUser)
Route.delete('/postdelete/:email', controlsequel.deleteUser)
Route.get('/postuserlist', controlsequel.getAllUser)
Route.get('/postuser/:email', controlsequel.getUserbyEmail)
Route.put('/postupdate', controlsequel.updateUser)

Route.get('/users', async (req, res) => {
    User.query()
    .then(users => {
        res.json(users)
    })
})

Route.get('/users/:id', (req, res) => {
    let id = parseInt(req.params.id)
    User.query()
    .where('id', id)
    .then(user => {
        res.json(user)
    })
})

Route.post('/users', (req, res) => {
    const {username, email, password} = req.body

    User.query().insert({
        username, email, password
    }).then(resp => {
        res.json(`Data Inserted ${resp}`)
    })
})

Route.put('/users', (req, res) => {
    const {username, email, password} = req.body

    User.query()
    .patch({ username, email, password})
    .where('username', '=', username)
    .then(resp => {
        if(resp == 0)
        res.json('User Not Found')
        else
        res.json('Data Updated')
    })
})

Route.delete('/users/:id', (req, res) => {
    let id = parseInt(req.params.id)

    User.query()
    .deleteById(id)
    .then(resp => {
        if(resp == 0)
        res.json('User Not Found')
        else
        res.json('Data Deleted')
    })
})


Route.get('/service', async (req, res) => {
    await userservice.getAll().then(resp => {
        res.json(resp)
    })
})

Route.get('/service/:name', async(req, res) => {
    await userservice.getByName(req.params.name).then(resp => {
        res.json(resp)
    })
})

Route.post('/service', async(req, res) => {
    await userservice.createUser(req.body).then(resp => {
        res.json(resp)
    })
})

Route.put('/service', async(req, res) => {
    await userservice.updateUser(req.body).then(resp  => {
        res.json(resp)
    })
})

Route.delete('/service/:id', async(req, res) => {
    let id = parseInt(req.params.id)
    await userservice.deleteUser(id).then(resp => {
        res.json(resp)
    })
})

module.exports = Route;



