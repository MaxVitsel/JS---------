import './App.css';
import Movie from './components/movie'
import {useState, useEffect} from 'react'
import NotFound from './components/notfound'
import {Spinner} from 'react-bootstrap'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_djcv9k1d/inseption'
const movieTop = 'https://imdb-api.com/en/API/Top250Movies/k_djcv9k1d'

function App() {
  const [movie,setMovie] = useState([])
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error , setError] = useState(false)
  const onHandleTerm = (e) => {
    setTerm(e.target.value)
  }
  
  useEffect(() => {
    fetch(movieTop)
    .then(res => res.json())
    .then(res => {
      setMovie(res.items)
      setLoading(false)
    })
    
  },[])

  const onHandleSearch = (e) => {
      e.preventDefault()
      setLoading(true)
      fetch(movieApi + term)
      .then(res => res.json())
      .then(res => {
        setMovie(res.results)
        setLoading(false)
      })
      setTerm('')
    }

  const onNotFound = (e) => {
      setLoading(true)
      fetch(movieTop)
      .then(res => res.json())
      .then(res => {
        setMovie(res.items)
        setLoading(false)
      })
  }
  return (
    <>
      <header>
        <form action="submit" onSubmit={onHandleSearch}>
          <input type="text" placeholder="Search..." value={term} onChange={onHandleTerm}/>
        </form>
       </header>
      <div className="movies">
          {
          error  ? <NotFound onNotFound={onNotFound}/> :
          (loading ? <Spinner animation="grow" variant="light" 
          style={{width: '5rem', height: '5rem',position: 'absolute', top: '50%', left: '50%'}}/> : 
          movie.map((elem) => <Movie key = {elem.id} {...elem}/>)) 
          }
      </div>
    </>
  );
}

export default App;
