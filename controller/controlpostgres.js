const helper = require('../service/helper')

module.exports.createUser = async (req, res) => {
    try {

        const c_result = await helper.createUser(req.body)
        if(c_result)
        res.status(200).json(c_result)

    } catch(err) {
        res.status(200).json({
            message: 'CreateUser API failed', data: {}, err: err
        })
    }
}

module.exports.updateUser = async(req, res) => {
    try {

        if(!req.params.id)
        res.status(200).json({
            message: 'Id is required to Update a record', data: {}, err: err
        })

        const u_result = await helper.updateUser(req.params.id, req.body)
        if(u_result)
        res.status(200).json(u_result)

    } catch(err) {
        res.status(200).json({
            message: 'UpdateUser API failed', data: {}, err: err
        })
    }
}

module.exports.deleteUser = async(req, res) => {
    try {

        if(!req.params.id)
        res.status(200).json({
            message: 'Id is required to delete a record', data: {}, err: err
        })

        const d_result = await helper.deleteUser(req.params.id)
        res.status(200).json(d_result)

    } catch(err) {
        res.status(200).json({
            message: 'DeleteUser API failed', data: {}, err: err
        })
    }
}

module.exports.getUser = async(req, res) => {
    try {

        if(!req.params.name)
        res.status(200).json({
            message: 'Name is required to Get a record', data: {}, err: err
        })

        const user = await helper.getUser(req.params.name)
        res.status(200).json(user)

    } catch(err) {
        res.status(200).json({
            message: 'User API failed', data: {}, err: err
        })
    }
}

module.exports.getAllUser = async(req, res) => {
    try {
        const a_user = await helper.getAllUser();
        res.status(200).json(a_user)
    } catch(err) {
        res.status(200).json({
            message: 'UserList API failed', data: {}, err: err
        })
    }
}

module.exports.getLimitSortUser = async( req, res) => {
    try {
        const ls_user = await helper.getLimitSortUser(req.query);
        res.status(200).json(ls_user)
    } catch(err) {
        res.status(200).json({
            message: 'Limit & Sort API failed', data: {}, err: err
        })
    }
}