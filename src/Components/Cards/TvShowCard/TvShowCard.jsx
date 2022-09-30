import React from 'react'
import { useNavigate } from 'react-router'

function TvShowCard(props) {
    const POSTER_IMG = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    const navigate = useNavigate()
    function showDescription()
    {
        navigate(`/tv/${props.id}`)
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

export default TvShowCard