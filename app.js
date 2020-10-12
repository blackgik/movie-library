// creating a movie-api
// we can see the list of movies and rating
//we can get the movie you want based on rating or title

const yargs = require('yargs');
const movies = require('./movie.js')

// creating the app version
yargs.version('2.1.0');

// creating the add command
yargs.command({
    command: 'add',
    desc: 'add handler',
    builder: {
        title: {
            desc: 'movie title',
            demandOption: true,
            type: 'string'
        }, 
        rating:{
            desc: 'movie rating',
            demandOption:true,
            type: 'string',
        }
    },
    handler: function (argv) {
        movies.addMovie(argv.title, argv.rating)
    }
})


//creating the movie listing screen
yargs.command({
    command: 'list',
    desc: 'listing movie function',
    handler: function() {
        movies.listMovies()
    }
})

// creating a lend movie function
yargs.command({
    command: 'lend',
    desc: 'lending function',
    builder: {
        title:{
            desc: 'lending title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('I have lended the movie')
    }
})

// removing moving from library when rating goes below 3.0
yargs.command({
    command: 'remove',
    desc: 'remove command handler',
    handler: function(){
        console.log('movies went below the standard')
    }
})


// parsing all the arguments
yargs.parse()