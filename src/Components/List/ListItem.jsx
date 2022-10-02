import React from 'react'
import { useNavigate } from 'react-router'

function ListItem(props) {
    const POSTER_IMG = `https://image.tmdb.org/t/p/w500${props.poster_path}`
  const navigate = useNavigate()
    function getDetail()
    {
      navigate(`/${props.type}/${props.id}`)
    }
  return (
    <div className='list-item'>
        <div className='list-item-img' onClick={getDetail}>
            <img src={POSTER_IMG} alt="poster" />
        </div>
        <div className="list-item-content">
            <p className='item-title'>{props.title}</p>
            <p className='item-release'>{props.release}</p>
            <p className='item-overview'>{props.overview}</p>
        </div>
    </div>
  )
}
export default ListItem