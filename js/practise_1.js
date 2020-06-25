"use strict";

const numberOfFilms = +prompt("How much films you have watched yet", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedFilmFirst = prompt("One of the most recently watched films ?", "");
const filmRateFirst = +prompt("How much do you rate it ?", "");
const lastWatchedFilmSecond = prompt("One of the most recently watched films ?", "");
const filmRateSecond = +prompt("How much do you rate it ?", "");

personalMovieDB.movies[lastWatchedFilmFirst] = filmRateFirst;
personalMovieDB.movies[lastWatchedFilmSecond] = filmRateSecond;

console.log(personalMovieDB);
