
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sighting', function(table) {
    table.increments(),
    table.integer('bird_id').references('bird.id').onDelete('CASCADE'),
    table.integer('member_id').references('member.id').onDelete('CASCADE'),
    table.integer('location_id').references('location.id').onDelete('CASCADE'),
    table.date('sighting_date'),
    table.text('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sighting')
};
