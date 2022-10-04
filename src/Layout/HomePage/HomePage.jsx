import React, { useState } from 'react'
import MovieCard from '../../Components/Cards/MovieCard/MovieCard'
import TvShowCard from "../../Components/Cards/TvShowCard/TvShowCard"
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import {useGetPMovie, useGetPShows} from "../../utils/Hooks"


function HomePage() {
    const [status, changeStatus]  = useState(false)
    const popularMovies = useGetPMovie(changeStatus)
    const movieCards = popularMovies.map(single => {
      return <MovieCard key={single.id} id = {single.id} type ="movie" poster_path = {single.poster_path} release = {single.release_date} vote = {single.vote_average}/>
    })

    const popularShows = useGetPShows()
    const showsCards = popularShows.map(single => {
      return <TvShowCard key={single.id} id = {single.id} type = "tv" poster_path = {single.poster_path} release = {single.first_air_date} vote = {single.vote_average}/>
    })
  return (
    <>
        <Hero/>
        <div className='card'>
          <p>Popular Movies</p>
          {status ?  
          <div className='card-list'>
            {movieCards}
          </div>: "loading"}
        </div>

        <div className='card'>
          <p>Popular TV Show</p>
          <div className='card-list'>
            {showsCards}
          </div>
        </div>
        <Footer/>
    </> 
  )
}

export default HomePage