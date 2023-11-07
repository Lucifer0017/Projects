import React from 'react';
import {useParams} from 'react-router-dom'

// import { Container } from './styles';

function MovieDetails() {


  let {id} = useParams();
  return (
    <div>MovieDetails {id}</div>
  )
}

export default MovieDetails;