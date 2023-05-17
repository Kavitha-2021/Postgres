const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'firstDB',
  password: '9701',
  port: 5432,
})

client.connect(function(err) {
    if (err) throw err;
    console.log("POSTGRESQL Connected Without ORM!");
});

module.exports = client