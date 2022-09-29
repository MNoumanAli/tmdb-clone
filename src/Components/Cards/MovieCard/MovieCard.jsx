import React from 'react'

function MovieCard(props) {
    //console.log(props)
    const POSTER_IMG = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    console.log(POSTER_IMG)
  return (
    <div className='card-container'>
        <div>
            <img src={POSTER_IMG} alt="Movie Poster" className='poster'/>
        </div>
        <div>
            <p>{props.release}</p>
        </div>
    </div>
  )
}

export default MovieCard