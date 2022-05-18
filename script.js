//movie api url
let movieapi =
  "https://api.themoviedb.org/3/discover/movie?api_key=73fd371dd4dae96ea8f80a479504448a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
//17 items in array
//to get genre list we have to do another api call
//ratings is out of 10

fetch(movieapi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(movieapi);
    for (let i = 0; i <= data.results.length; i++) {
      let posterPath = data.results[i].poster_path;
      console.log(posterPath);
      $(".movieTitle").append(`<h1>${data.results[i].title}</h1>`);
      $(".releaseDate").append(`<p>${data.results[i].release_date}</p>`);
      $(".moviePoster").append("<img src = https://image.tmdb.org/t/p/original/" + posterPath+">");
      $(".bio").append(`<p>${data.results[i].overview}</p>`);
      $(".rating").append(`<p>${data.results[i].vote_average}</p>`);

    }

   
    
  });
