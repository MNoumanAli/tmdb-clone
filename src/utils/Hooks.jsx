import React, { useEffect } from "react"
import {getPopularMovies} from "../API/index"

export const useGetPMovie = () => {
    const [popularMovies, updateMovies] = React.useState([])
    useEffect(() => {
        try{
            getPopularMovies()
            .then(data => {
                updateMovies(data["data"].results)
                console.log(popularMovies)
            })
            .catch(err => console.log(err))
        }catch(err)
        {
            console.log(err)
        }
    }, [])
    return popularMovies
}