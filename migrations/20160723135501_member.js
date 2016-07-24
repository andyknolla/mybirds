
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', function(table) {
    table.increments(),
    table.string('username'),
    table.string('password'),
    table.integer('location_id')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('member')
};
