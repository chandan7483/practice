var movies = /** @class */ (function () {
    function movies() {
        this.languages = 2;
    }
    movies.prototype.withhero = function () {
        console.log("we can know whose movie is this");
    };
    movies.prototype.withstory = function () {
        console.log("we can know which type of movie is this");
    };
    return movies;
}());
var avatar = new movies();
console.log(avatar);
