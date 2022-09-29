import React from 'react'
import Footer from '../../Components/Footer/Footer'
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
        <Footer/>
    </> 
  )
}

export default HomePage