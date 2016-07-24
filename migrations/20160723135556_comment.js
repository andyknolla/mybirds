
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', function(table) {
      table.increments(),
      table.string('title'),
      table.text('content'),
      table.timestamp('created_at').defaultTo(knex.fn.now()),
      table.integer('bird_id'),
      table.integer('member_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comment')
}
