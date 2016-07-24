
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bird', function(table) {
      table.increments(),
      table.string('name'),
      table.text('description')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bird')
};
