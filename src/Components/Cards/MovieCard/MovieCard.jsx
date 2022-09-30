import React from 'react'
import {  useNavigate } from 'react-router-dom'

function MovieCard(props) {
    //console.log(props)
    const POSTER_IMG = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    const navigate = useNavigate()

    function showDescription()
    {
        navigate(`/${props.type}/${props.id}`)
    }
    return (

    <div className='card-container'>      
        <div onClick={showDescription}>
            <img src={POSTER_IMG} alt="Movie Poster" className='poster'/>
        </div>
        <div className='vote'>
        <p>{props.vote}</p>
        </div>
        <div>
            <p>{props.release}</p>
        </div>
    </div>
  )
}

export default MovieCard