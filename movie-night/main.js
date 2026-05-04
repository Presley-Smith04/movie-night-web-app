//imports
import { getMovieDetails, getPopularMovies, searchMovies } from "./api.js";


//main container
const app = document.getElementById("app");


//initialize app
async function init() {
  const movies = await getPopularMovies();
  displayMovies(movies);
}


//Grid of cards, list of movie objects from the api
function displayMovies(movies) {
  app.innerHTML = movies
    .map(
      (movie) => `
        <div class="movie-card" data-id="${movie.id}">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    </div>
  `,
    )
    .join("");

  //give click listeners to each card after rendering
  document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      showMovieDetails(id);
    });
  });
}

//fetch and display movie info
async function showMovieDetails(id) {
  const movie = await getMovieDetails(id);

  //extract top 5 cast members
  const cast = movie.credits.cast
    .slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");

    //render details view
  app.innerHTML = `
    <button id="back-btn">Back</button>
    <div class="details">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
      
      <div>
        <h2>${movie.title}</h2>
        <p><strong>Rating:</strong ${movie.vote_average}</p>
        <p><strong>Release:</strong ${movie.release_date}</p>
        <p><strong>Cast:</strong ${cast}</p>
        <p>${movie.overview}</p>
    </div>
    </div>
    `;

    //back button 
  document.getElementById("back-btn").addEventListener("click", init);
}

//load
init();

//search logic
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();

  //if search is cleared, reload movies 
  if (query.length === 0) {
    init();
    return;
  }

  // fetch and display results
  const results = await searchMovies(query);
  displayMovies(results);
});
