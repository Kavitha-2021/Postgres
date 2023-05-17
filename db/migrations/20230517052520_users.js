exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('username')
        t.string('email')
        t.string('password')
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};