import './App.css';
import Movie from './components/movie'
import {useState, useEffect} from 'react'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_djcv9k1d/inseption'
const movieTop = 'https://imdb-api.com/en/API/Top250Movies/k_djcv9k1d'

function App() {
  const [movie,setMovie] = useState([])
  const [term, setTerm] = useState('')
  const onHandleTerm = (e) => {
    setTerm(e.target.value)
  }
  
  useEffect(() => {
    fetch(movieTop)
    .then(res => res.json())
    .then(res => setMovie(res.items))
  },[])

  const onHandleSearch = () => {
      fetch(movieApi)
      .then(res => res.json())
      .then(res => setMovie(res.results))
  }
  return (
    <>
      <header>
          <input type="text" placeholder="Search..." value={term} onChange={onHandleSearch}/>
       </header>
      <div className="movies">
          {movie.map((elem) => <Movie className='movie_block' key = {elem.id} {...elem}/>)}
      </div>
    </>
  );
}

export default App;
