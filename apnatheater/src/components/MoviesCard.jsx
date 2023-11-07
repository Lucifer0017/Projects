import React from 'react';

// import { Container } from './styles';

function MoviesCard({image, title, year}) {
    return (
        <div className='card'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{year}</p>
        </div>
    )
}

export default MoviesCard;