import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import MovieDetails from './components/MovieDetails'
import { Routes, Route } from 'react-router-dom'
// 440a99f3
function App() {

  const [movies, setMovies] = useState([])
  const [series,setSeries] = useState([])

  // This function will search including all the movies including given keyword in their name and store them in movies
  const fetchMovies = (keyword) => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=440a99f3&s=${keyword}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(err => alert("Something went wrong"))
  }

  const fetchSeries = (keyword) => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=440a99f3&s=${keyword}&type=series`)
      .then(res => res.json())
      .then(data => setSeries(data.Search))
      .catch(err => alert("Something went wrong"))
  }

  useEffect(() => {
        fetchMovies(`Harry`)
        fetchSeries(`one`)
  }, [])

  return (
    <div className='body'>
      <Navbar fetchMovies1={fetchMovies} fetchSeries1={fetchSeries} ></Navbar>
      <Routes>
        <Route path='/' element={<Home movies1={movies} series1={series}></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/movie-details/:id' element={<MovieDetails></MovieDetails>}></Route>
      </Routes>

    </div>
  )
}

export default App
