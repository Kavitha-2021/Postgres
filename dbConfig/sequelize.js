const sequelize = require("sequelize");

const db = new sequelize('firstDB', 'postgres', '9701', {
    host: 'localhost',
    dialect: 'postgres'
})

db.authenticate().then(() => {
    console.log('POSTGRESQL with ORM Connected')
}).catch(err => {
    console.log(`Error Occured ${err}`)
})

module.exports = db