exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('comment').insert({
            bird_id: 1,
            user_id: 2,
            title: 'nice bird',
            content: 'That is a very neat bird'
        }),
        knex('comment').insert({
            bird_id: 2,
            user_id: 1,
            title: 'cool bird',
            content: 'nice bird bro'
        }),
        knex('comment').insert({
            bird_id: 1,
            user_id: 3,
            title: 'Sweet bird',
            content: 'very cool'
        })
    )
}
