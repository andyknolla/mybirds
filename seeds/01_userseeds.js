exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('username').insert({
            username: 'Ali'
        }),
        knex('username').insert({
            username: 'Andy'
        }),
        knex('username').insert({
            username: 'Andrew'
        })
    )
}
