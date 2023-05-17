const db = require('../dbConfig/sequelize')

const datatype = require('sequelize')

const User = db.define("employee", {
    email: {
        type: datatype.STRING,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: datatype.STRING,
    },
    age: {
        type: datatype.INTEGER,
    },
    employed: {
        type: datatype.BOOLEAN,
        defaultValue: false
    }
},
{
    timestamps: true
})

User.sync().then(() => {
    console.log('User Model Synced')
})

module.exports = User