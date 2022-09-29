import React from 'react'
import MovieCard from '../../Components/Cards/MovieCard/MovieCard'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import {useGetPMovie} from "../../utils/Hooks"
function HomePage() {

    const popularMovies = useGetPMovie()
    const movieCards = popularMovies.map(single => {
      return <MovieCard key={single.id} poster_path = {single.poster_path} release = {single.release_date}/>
    })
  return (
    <>
       <NavBar/>
        <Hero/>
        <div>
          {console.log(movieCards)}
        </div>
        <Footer/>
    </> 
  )
}

export default HomePage