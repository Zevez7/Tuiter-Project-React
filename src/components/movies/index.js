import {useState} from "react";
import {Link} from "react-router-dom";

const Movies = () => {
  const [title, setTitle] = useState('Avatar');
  const [movies, setMovies] = useState([]);
  const searchForMovie = () => {
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=852159f0`)
      .then(response => response.json())
      .then(results => setMovies(results.Search))
  }
  return(
    <div>
      <h1>Movies {title}</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="form-control"/>
      <button onClick={searchForMovie} className="btn btn-primary">Search</button>
      <ul className="list-group">
        {
          movies && movies.map(movie =>
            <li className="list-group-item">
              <img src={movie.Poster} height={100}/>
              <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  )
}
export default Movies;