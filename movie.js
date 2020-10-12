const fs =require('fs');
const chalk = require('chalk');

// adding to the b=movie library
const addMovie = (title, rating) => {
    const movies = loadMovie()
    const duplicate = movies.find(movie => movie.title === title);
    console.log(duplicate)
    if (!duplicate){
        movies.push({
            title:title, 
            rating:rating
        });
        console.log(chalk.green(title) + ' has been added to the movie library');

    } else{
        console.log(chalk.red(title) + ' already exist')
    }
    
    saveMovie(movies);
}

// saving the data function
const saveMovie = (movies) =>{
    const Moviejson = JSON.stringify(movies)
    fs.writeFileSync('movie.json', Moviejson)
}

// laoding the data function
const loadMovie = ()=>{
    try {
        const bufferData = fs.readFileSync('movie.json');
        const data = bufferData.toString();
        const parsedData = JSON.parse(data);

        return parsedData
    } catch(e) {
        return [];
    }
}

module.exports = {
    addMovie: addMovie,
}