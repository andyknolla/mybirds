
exports.up = function(knex, Promise) {
    return knex.schema.createTable('image', function(table) {
      table.increments(),
      table.integer('bird_id').references('bird.id').onDelete('CASCADE'),
      table.text('image_url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('image')
};
