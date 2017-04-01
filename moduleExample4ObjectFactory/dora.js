var movie=require("./movie");
//here we have to call the function which will return object so that each person can have his faviourite movie
var doraMovies=movie();
doraMovies.favMovie='The NoteBook';
console.log("favorite movie of dora is",doraMovies.favMovie);
