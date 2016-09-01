exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('member').insert({
            username: 'Ali',
            password: 'ali',
            location_id: 1
        }),
        knex('member').insert({
            username: 'Andy',
            password: 'andy',
            location_id: 2
        }),
        knex('member').insert({
            username: 'Andrew',
            password: 'andrew',
            location_id: 3
        })
    )
}
