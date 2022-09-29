import React from 'react'
import MovieCard from '../../Components/Cards/MovieCard/MovieCard'
import TvShowCard from "../../Components/Cards/TvShowCard/TvShowCard"
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import {useGetPMovie, useGetPShows} from "../../utils/Hooks"
function HomePage() {

    const popularMovies = useGetPMovie()
    const movieCards = popularMovies.map(single => {
      return <MovieCard key={single.id} poster_path = {single.poster_path} release = {single.release_date} vote = {single.vote_average}/>
    })

    const popularShows = useGetPShows()
    const showsCards = popularShows.map(single => {
      return <TvShowCard key={single.id} poster_path = {single.poster_path} release = {single.first_air_date} vote = {single.vote_average}/>
    })
  return (
    <>
       <NavBar/>
        <Hero/>
        <div className='card'>
          <p>Popular Movies</p>
          <div className='card-list'>
            {movieCards}
          </div>
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