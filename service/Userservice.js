const db = require('../dbConfig/knex')

module.exports = Userservice = {
    getAll: async() => {
        const users = await db('users')
        return users;
    },
    getByName: async(name) => {
        const user = await db('users').where("username", name);
        return user;
    },
    createUser: async(user) => {
        const c_user = await db('users').insert(user);
        return c_user
    },
    updateUser: async(user) => {
const {username, email, password} = user

        const u_user = await db('users').where("username", username).update({
            username, email, password
        })

        return u_user
    },
    deleteUser: async(id) => {
        const d_user = await db('users').where('id', id).del();
        return d_user
    }
}