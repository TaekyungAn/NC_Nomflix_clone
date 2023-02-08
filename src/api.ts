const API_KEY = "f5618a2de5acaca0d5b54b520c5fa640";
const BASE_PATH = "https://api.themoviedb.org/3";
const IMG_PATH = "https://image.tmdb.org/t/p";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
