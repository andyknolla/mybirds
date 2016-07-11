exports.seed = function(knex, Promise) {
    return Promise.join(
        // Inserts seed entries
        knex('bird').insert({
            name: 'Lesser Goldfinch',
            location: 'Lilly Lake',
            image_url: 'http://www.audubon.org/sites/default/files/Lesser_Goldfinch_s52-11-240_l_1.jpg',
            description: 'Tiny little buddy!',
            user_id: 1
        }),
        knex('bird').insert({
            name: 'Williamsons\'s Sapsucker',
            location: 'secret camping spot',
            image_url: 'https://www.allaboutbirds.org/guide/PHOTO/LARGE/yellow-bellied_sapsucker_1.jpg',
            description: 'Very pretty little buddy. Wouldn\'t let us get very close',
            user_id: 2
        }),
        knex('bird').insert({
            name: 'Audubon Warbler',
            location: 'secret camping spot',
            image_url: 'http://www.tringa.org/images/8951_Yellow-rumped_Warbler_07-01-2010_0.jpg',
            description: 'A very hoppy little buddy',
            user_id: 3
        })
    )
}
