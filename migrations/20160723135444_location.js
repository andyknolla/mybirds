exports.up = function(knex, Promise) {
    return knex.schema.createTable('location', function(table) {
        table.increments(),
            table.string('city'),
            table.string('state'),
            table.text('details')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('location')
}
