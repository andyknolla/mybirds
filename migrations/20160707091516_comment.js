
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table) {
    table.increments(),
    table.integer('bird_id').references('bird.id'),
    table.integer('user_id').references('user.id'),
    table.string('title'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comment');
};
