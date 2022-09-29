import React, { useEffect } from "react"
import {fetchPopularMovies, fetchPopularShows} from "../API/index"

export const useGetPMovie = () => {
    const [popularMovies, updateMovies] = React.useState([])
    useEffect(() => {
        try{
            fetchPopularMovies()
            .then(data => {
                updateMovies(data["data"].results)
            })
            .catch(err => console.log(err))
        }catch(err)
        {
            console.log(err)
        }
    }, [])
    return popularMovies
}

export const useGetPShows = () => {
    const [popularShows, updateShows] = React.useState([])
    useEffect(() => {
        try{
            fetchPopularShows()
            .then(data => {
                updateShows(data["data"].results)
            })
            .catch(err => console.log(err))
        }catch(err)
        {
            console.log(err)
        }
    }, [])
    console.log(popularShows)
    return popularShows
}