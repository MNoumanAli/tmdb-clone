import React, { useEffect } from "react"
import {fetchDetail, fetchPopularMovies, fetchPopularShows} from "../API/index"

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

export const useGetMovieDetail = (id) => {

    const [detail, updateDetail] = React.useState([])
    useEffect(() => {
        try{
            fetchDetail("movie", id)
            .then(data => {
                updateDetail(data.data)
            }).catch(err => {
                console.log(err)
            })
        }catch(err)
        {
            console.log(err)
        }
    }, [id])
    return detail
}