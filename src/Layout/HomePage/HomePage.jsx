import React from 'react'
import Hero from '../../Components/Hero/Hero'
import NavBar from '../../Components/NavBar/NavBar'
import {useGetPMovie} from "../../utils/Hooks"
function HomePage() {

    const popularMovies = useGetPMovie()
    console.log(popularMovies)
  return (
    <>
       <NavBar/>
    <Hero/>
    </> 
  )
}

export default HomePage