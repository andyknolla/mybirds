
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bird', function(table) {
    table.increments(),
    table.string('name'),
    table.string('location'),
    table.text('image_url'),
    table.integer('user_id').references('user.id')
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('bird');
};
