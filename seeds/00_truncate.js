exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE comment, bird, username RESTART IDENTITY CASCADE")
  };
