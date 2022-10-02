import React from 'react'
import {  useParams } from 'react-router'
import { useGetKeywords, useGetMovieDetail } from '../../utils/Hooks'
import KeywordItem from './Keywords/KeywordItem'
function DetailPage() {
    
    const parms = useParams()
    const type = parms.type
    const detail = useGetMovieDetail(type , parms.id)
    const keyWords = useGetKeywords(parms.type , parms.id)
    const allKeyWords = keyWords.map(item => {
        return <KeywordItem key={item.id} id={item.id} name = {item.name} type={parms.type}/>
    })
    let genre = ""
    for( let  i in detail.genres)
    {
        genre = genre + detail.genres[i].name + ", "
    }

  return (
    <div className='detail-page'>
        <div className='detail-container1'>
            <div className='detail-img'>
                <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="Poster" />
            </div>
            <div className='detail'>
                <div className='movie-detail'>
                    <p className='detail-title'>{ type === "movie" ? detail.title : detail.name}</p>
                    <div>
                    <p>{type === "movie" ? detail.release_date : detail.first_air_date}</p>
                    <p>{genre}</p>
                    <p>{type === "movie" ? detail.runtime : detail.episode_run_time}Min</p>
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

        <div className='detail-container2'>
            <div className='review-container'>
                
            </div>
            <div className='keyword-container'>
                <p>Keywords</p>
                <div className='all-keywords'>
                    {allKeyWords}
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default DetailPage