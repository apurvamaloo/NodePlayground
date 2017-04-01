var movie=require("./movie");
//here we have to call the function which will return object so that each person can have his faviourite movie
var scottMovies=movie();
 scottMovies.favMovie='Harry Potter';
console.log("favorite movie of scott is",scottMovies.favMovie);
