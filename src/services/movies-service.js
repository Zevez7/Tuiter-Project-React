export const searchForMovieByTitle = (title) => {
  return fetch(`https://www.omdbapi.com/?s=${title}&apikey=852159f0`)
    .then(response => response.json())
    .then(results => results.Search)
}

export const retrieveMovieByImdbID = (imdbID) => {
  return fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=852159f0`)
    .then(response => response.json())
}