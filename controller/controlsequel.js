const User = require('../models/postgresModel');

module.exports.createUser = async(req, res) => {
    try {
        const {email, fullName, age, employed} = req.body;
        await User.create({
            email, fullName, age, employed
        }).then(resp => {
            res.status(200).json({ message: 'New User Added', data: resp.dataValues , err: {}  })
        }).catch(err => {
            res.status(200).json({ message: 'User Not added', data: {}, err: err  })
        })

    } catch(err) {
        res.status(200).json({ message: 'Failed to add user', data: {}, err: err  })
    }
}

module.exports.deleteUser = async(req, res) => {
    try {
        const { email } = req.params
        await User.destroy({where: {email} })
        .then(() => {
            res.status(200).json({ message: `Deleted record with email ${email}`, data: {} , err: {}  })
        }).catch(err => {
            res.status(200).json({ message: 'Deletion failed', data: {} , err: err  })
        })
    } catch(err) {
        res.status(200).json({ message: 'Failed to delete user', data: {}, err: err  })
    }
}

module.exports.getAllUser = async(req, res) => {
    try {
        await User.findAll({})
        .then(resp => {
            res.status(200).json({message: 'Data Fetched', data: resp, err: {}})
        })
        .catch(err => {
            res.status(200).json({ message: 'Cant fetch data', data: {} , err: err  })
        })
    } catch(err) {
        res.status(200).json({ message: 'Failed to getall user', data: {}, err: err  })
    }
}

module.exports.getUserbyEmail = async(req, res) => {
    try {
        const {email} = req.params
        await User.findAll({where: {email}})
        .then(resp => {
            res.status(200).json({message: 'Data Fetched', data: resp, err: {}})
        })
        .catch(err => {
            res.status(200).json({ message: 'Cant fetch data', data: {} , err: err  })
        })
    } catch(err) {
        res.status(200).json({ message: 'Failed to getall user', data: {}, err: err  })
    }
}

module.exports.updateUser = async(req, res) => {
    try {
        const { email, fullName, age, employed } = req.body
        await User.update({email, fullName, age, employed}, {where: {email} })
        .then(() => {
            res.status(200).json({message: 'Data Updated', data: {}, err: {}})
        })
        .catch(err => {
            res.status(200).json({ message: 'Cant Update data', data: {} , err: err  })
        })
    } catch(err) {
        res.status(200).json({ message: 'Failed to Update user', data: {}, err: err  })
    }
}