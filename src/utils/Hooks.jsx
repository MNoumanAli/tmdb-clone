import React, { useEffect } from "react"
import {fetchPopularMovies} from "../API/index"

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