
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('username').del(),

    // Inserts seed entries
    knex('username').insert({
      username: 'Ali'
    }),
    knex('username').insert({
      username: 'Andy'
    }),
    knex('username').insert({
      username: 'Andrew'
    })
  );
};
