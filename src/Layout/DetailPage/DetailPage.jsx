import React from 'react'
import {  useParams } from 'react-router'
import RecomCard from '../../Components/Cards/RecomCard/RecomCard'
import Footer from '../../Components/Footer/Footer'
import { useGetKeywords, useGetMovieDetail, useGetRecommendation } from '../../utils/Hooks'
import KeywordItem from './Keywords/KeywordItem'


function DetailPage() {

    const {type, id} = useParams()
    const detail = useGetMovieDetail(type , id)   
    console.log(detail)
    const keyWords = useGetKeywords(type , id)
    const recommendationData = useGetRecommendation(type , id)

    const recommendation = recommendationData.map(item => {
        return <RecomCard key={item.id} type={type} id={item.id} poster_path = {item.poster_path} title = {type === "movie" ? item.title : item.name}/>
    })
    const allKeyWords = keyWords.map(item => {
        return <KeywordItem key={item.id} id={item.id} name = {item.name} type={type}/>
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
            <div className="other-detail-container">
                <div className='review-container'>
                
                </div>

                <div>
                    <p className='rec-heading'>Recommendations</p>
                    <div className='recommendation-container'>
                        {recommendation}
                    </div>
                </div>
            </div>
            <div className='keyword-container'>
                <p>Keywords</p>
                <div className='all-keywords'>
                    {allKeyWords}
                </div>
               
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailPage