exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE image, comment, sighting, bird, member, location RESTART IDENTITY CASCADE")
  };
