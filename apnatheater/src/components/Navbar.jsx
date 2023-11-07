import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Navbar({fetchMovies1,fetchSeries1}) {

  const [keyword, setKeyword] = useState('');
  return (
    <div className='navbar'>
    <p>ApnaTheater</p>
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <input onChange={input => setKeyword(input.currentTarget.value)} type="search" />
    <button onClick={()=> {
    fetchMovies1(keyword)
    fetchSeries1(keyword)
    }}>search</button>
    </div>
    </div>
  )
}

export default Navbar;