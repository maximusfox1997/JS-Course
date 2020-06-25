"use strict";

const numberOfFilms = +prompt("How much films you have watched yet", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const lastWatchedFilm = prompt("One of the most recently watched films ?", "");
    const filmRate = prompt("How much do you rate it ?", "");

    if(lastWatchedFilm !== null && filmRate !== null && 
        lastWatchedFilm !== '' && filmRate !== '' && 
        lastWatchedFilm.length < 50){

        personalMovieDB.movies[lastWatchedFilm] = filmRate;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }

}

// let iterator = 0;
// while(iterator < 2){
//     const lastWatchedFilm = prompt("One of the most recently watched films ?", "");
//     const filmRate = prompt("How much do you rate it ?", "");

//     if(lastWatchedFilm !== null && filmRate !== null && 
//         lastWatchedFilm !== '' && filmRate !== '' && 
//         lastWatchedFilm.length < 50){

//         personalMovieDB.movies[lastWatchedFilm] = filmRate;
//         console.log("Done");
//     } else {
//         console.log("Error");
//         iterator--;
//     }

//     iterator++;
// }

if (personalMovieDB.count < 10) {
    console.log("It's too few movies watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("You're classical watcher");
} else if (personalMovieDB.count >= 50) {
    console.log("You are a movie fan");
} else {
    console.log("Error");
}

console.log(personalMovieDB);
