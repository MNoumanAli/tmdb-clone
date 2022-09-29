import React from 'react'
import {  useParams } from 'react-router'
import { useGetMovieDetail } from '../../utils/Hooks'
function DetailPage() {
    const parms = useParams()
    const detail = useGetMovieDetail(parms.id)
    let genre = ""
    for( let  i in detail.genres)
    {
        genre = genre + detail.genres[i].name + ", "
    }
   
    console.log(detail)
  return (
    <div className='detail-page'>
        <div className='detail-img'>
            <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="Poster" />
        </div>
        <div className='detail'>
            <div className='movie-detail'>
                <p className='detail-title'>{detail.title}</p>
                <div>
                <p>{detail.release_date}</p>
                <p>{genre}</p>
                <p>{detail.runtime}Min</p>
                </div>           
            </div>
            <div className='detail-tagline'>
                <p>{detail.tagline}</p>
            </div>

            <div>
                <p className="overview-h">Overview</p>
                <div className='overview'>
                    {detail.overview}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage