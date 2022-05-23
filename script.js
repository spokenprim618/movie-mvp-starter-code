//movie api url
// let movieapi =
//   "https://api.themoviedb.org/3/discover/movie?api_key=73fd371dd4dae96ea8f80a479504448a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
// //17 items in array
//to get genre list we have to do another api call
//ratings is out of 10

// let genreApiList =
//   "https://api.themoviedb.org/3/genre/movie/list?api_key=73fd371dd4dae96ea8f80a479504448a";
// async function getGenres() {
//   let response2 = await fetch(genreApiList);
//   let list = await response2.json();
//   return list;
// }
// getGenres().then((response) => {
//   console.log(response);
// });
// console.log(getGenres());

let movieName = "yes please";
let movieApiLink;
function makingLink() {
  movieName = $(".searchInput").val();
  var URlMovie = "https://api.themoviedb.org/3/search/movie?";
  var API_Key = "api_key=73fd371dd4dae96ea8f80a479504448a&query=";
  movieApiLink = URlMovie + API_Key + movieNameConvert();
  console.log(movieApiLink);

  return movieApiLink;
}
function movieNameConvert() {
  movieName = movieName.replace(/[\s]/g, "+");
  return movieName;
}
console.log(movieNameConvert());

$(".submit").click(function () {
  fetch(makingLink())
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i <= 17; i++) {
        let posterPath = data.results[i].poster_path;
        console.log(posterPath);
        $(".thing").append(
          `<div class="moviePoster">` +
            `<img src = https://image.tmdb.org/t/p/original/${posterPath}></div>` +
            `<div class"info">` +
            `<div class="movieTitle">` +
            `<h1>${data.results[i].title}</h1>` +
            `</div>` +
            `<div class="releaseDate">` +
            `<p>${data.results[i].release_date}</p>` +
            `</div>` +
            `<div class = "bio">` +
            `<p>${data.results[i].overview}</p>` +
            `</div>` +
            `<div class ="rating">` +
            `
        <p>${data.results[i].vote_average}</p>` +
            `</div>` +
            `</div>`
        );
      }
    });
});
