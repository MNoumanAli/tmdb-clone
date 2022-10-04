import React from 'react'
import { useNavigate } from 'react-router'

function RecomCard(props) {
    const POSTER_IMG = `https://image.tmdb.org/t/p/w500${props.poster_path}`
    const navigate = useNavigate()
    function getDetail()
    {
        navigate(`/${props.type}/${props.id}`)
    }
  return (
    <div className='recommendation-item'>
        <div className="rec-img" onClick={getDetail}>
            <img src={POSTER_IMG} alt="Poster" />
        </div>
        <div className='rec-title'>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default RecomCard