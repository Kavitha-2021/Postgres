const client = require('../dbConfig/postgres')

const createUser = async (data) => {
    try {
        const {username, email, password} = data

        const resp = await client.query(
        'INSERT INTO customer (username, password, email, created_on) VALUES ($1 ,$2 ,$3, $4) RETURNING *',
        [username, password, email, new Date()])

        return {data: resp.rows[0], message: 'Value Inserted', error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to Insert Value', error: err.detail};
    }
}

const updateUser = async (id, data) => {
    try {
        const { username, password, email} = data

        await client.query(
        'UPDATE customer SET username=$1, email=$2, password=$3 WHERE userId=$4',
        [username, email, password, id])

        return {data: {}, message: 'Value Updated', error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to Insert Value', error: err};
    }
}

const deleteUser = async(id) => {
    try {
        await client.query(
            'DELETE FROM customer WHERE userId=$1', [id]
        )
        return {data: {}, message: `Deleted a record with Id ${id}`, error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to Delete Value', error: err};
    }   
}

const getUser = async (name) => {
    try {
        const g_resp = await client.query(
            'SELECT * FROM customer WHERE username=$1', [name]
        )
        return {data: g_resp.rows[0], message: 'Data fetched', error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to get Details', error: err};
    } 
}

const getAllUser = async() => {
    try {
        const users = await client.query( 'SELECT * FROM customer' )
        return {data: users.rows, message: 'Data fetched', error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to get Details', error: err};
    }
}

const  getLimitSortUser = async(query) => {
    try{
        var ls_resp;
        const {limit, order} = query
        const sort = order && order == '1' ? 'DESC' : 'ASC'

        if(limit && order) {
            ls_resp = await client.query(`SELECT username FROM customer ORDER BY username ${sort} LIMIT ${limit}`)
        } else if(limit && !order) {
            ls_resp = await client.query(`SELECT username FROM customer LIMIT ${limit}`)
        } else if(order && !limit) {
            ls_resp = await client.query(`SELECT username FROM customer ORDER BY username ${sort}`)
        } else {
            ls_resp = await client.query('SELECT username FROM customer ')
        }
        
        var user_arr = []
        ls_resp.rows.forEach(e => {
            user_arr.push(e.username) 
        })
        var final_resp = {users: user_arr}

        return {data: final_resp, message: 'Data fetched', error: null};
    } catch(err) {
        return {data: {}, message: 'Failed to get Details', error: err};
    }
}

const helper = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUser,
    getLimitSortUser
}

module.exports = helper