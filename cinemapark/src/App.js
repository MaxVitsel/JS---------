import './App.css';
import Movie from './components/movie.js'
import {useState, useEffect} from 'react'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_djcv9k1d/'

function App() {
  const [movie,setMovie] = useState([])
  
  useEffect(() => {
    fetch(movieApi)
    .then(res => res.json())
    .then(res => setMovie(res.results))
  },[])
  return (
    <div className="movies">
      <header>
        <input type="text" placeholder="Search"></input>
      </header>
      <div className="movies">
        {movie.map((elem) => <Movie key = {elem.id}{...elem}/>)}

      </div>
    </div>
  );
}

export default App;
