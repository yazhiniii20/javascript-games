import {useState} from 'react';
import './MovieSearch.css';
function MovieSearch(){
    const [search,setSearch] = useState("");
    const [movies , setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedMovie , setselectedMovie] = useState([]);
    async function getMovies(search){
        setHasSearched(true);
        if(search.trim() === ""){
            setMovies([]);
            return;
        }
        setLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?apikey=a46aa13b&s=${search}`);
        const data = await response.json();
        console.log(data);
        if(data.Response === "False"){
            setMovies([]);
        }else{
        setMovies(data.Search);
        }
        setLoading(false);
    }
    async function getselectedmoviedetails(imdbID){
        const response = await fetch(`https://www.omdbapi.com/?apikey=a46aa13b&i=${imdbID}`);
        const data = await response.json();
        console.log(data);
        if(data.Response === "False"){
            setselectedMovie(null);
        }else{
            setselectedMovie(data);
        }
    }
    return(
      <div className = "movie-container">
      <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)}/>
      <button onClick={() => getMovies(search)}> Search</button>
      {loading && <p> Loading </p>}
      {hasSearched && !loading && movies.length === 0 && (
             <p>No movies found</p>
     )}
      <div className = "movie-grid">
        {movies.map(movie => (
            <div id = {movie.imdbID} className = "movie-card"  onClick = {() => getselectedmoviedetails(movie.imdbID)}>
                <h3> {movie.Title}</h3>
                <h4> {movie.Year} </h4>
                <img src = {movie.Poster} alt = {movie.Title} onError={(e) => {
    e.target.src = "https://placehold.net/400x400.png";
  }}/>
                   {selectedMovie && (
            <div>
                <h2> {selectedMovie.Title} </h2>
                <p> {selectedMovie.Plot} </p>
            </div>
        )} 
            </div>
            
        ))}
        </div>
      
      </div>
    );
}
export default MovieSearch;