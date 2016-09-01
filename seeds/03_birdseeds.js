exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('bird').insert({
            name: 'Lesser Goldfinch',
            description: 'Tiny little buddy!'
        }),
        knex('bird').insert({
            name: 'Williamsons\'s Sapsucker',
            description: 'Very pretty little buddy'
        }),
        knex('bird').insert({
            name: 'Audubon Warbler',
            description: 'A very hoppy little buddy'
        })
    )
}
