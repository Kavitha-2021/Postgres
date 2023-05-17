exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'fodark', email: 'mock@email.com', password: 'mock'},
        {username: 'john', email: 'mock2@email.com', password: 'mock'},
        {username: 'david', email: 'mock3@email.com', password: 'mock'}
      ]);
    });
};