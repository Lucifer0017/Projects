import React from 'react';
import MoviesCard from './MoviesCard';
import Slider from "react-slick";



function Home({movies1, series1}) {
  // console.log(movies1)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows : 2,
    centerPadding: "60px"
  };

  return (
    <div className='Homecard'>
    <h2 style={{color:"white", textAlign:"center"}}>Movies</h2>
    <Slider {...settings}>
      {movies1.map((item,index) => <MoviesCard image={item.Poster} title = {item.Title} year = {item.Year}></MoviesCard>  )}
    </Slider>
    <h2 style={{color:"white", textAlign:"center"}}>Web Series</h2>
    <Slider {...settings}>
      {series1.map((item,index) => <MoviesCard image={item.Poster} title = {item.Title} year = {item.Year}></MoviesCard>  )}
    </Slider>

    </div>
  )
}

export default Home;