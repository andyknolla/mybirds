exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('comment').insert({
            title: 'nice bird',
            content: 'That is a very neat bird',
            created_at: '2016-09-19 03:14:07',
            bird_id: 1,
            member_id: 2
        }),
        knex('comment').insert({
            title: 'cool bird',
            content: 'nice bird bro',
            created_at: '2016-09-19 03:14:07',
            bird_id: 2,
            member_id: 1
        }),
        knex('comment').insert({
            title: 'Sweet bird',
            content: 'very cool',
            created_at: '2016-07-19 03:14:07',
            bird_id: 1,
            member_id: 3
        })
    )
}
