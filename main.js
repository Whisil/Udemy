let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let lastelyWatched = prompt("Один из последних просмотренных фильмов?");
let filmRating = prompt("На сколько оцените его?");

personalMovieDB.movies[lastelyWatched] = filmRating;

console.log(personalMovieDB);