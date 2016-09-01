
exports.seed = function(knex, Promise) {
      return Promise.all([
        // Inserts seed entries
        knex('location').insert({
          city: 'Denver',
          state: 'CO'
        }),
        knex('location').insert({
          city: 'Boulder',
          state: 'CO'
        }),
        knex('location').insert({
          city: 'Golden',
          state: 'CO'
        })
      ]);
};
