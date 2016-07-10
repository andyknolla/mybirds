
exports.up = function(knex, Promise) {
  return knex.schema.createTable('username', function(table) {
    table.increments(),
    table.string('username')
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('username');
};
