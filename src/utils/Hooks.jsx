import React, { useEffect, useState } from "react"
import {fetchDetail, fetchPopularMovies, fetchPopularShows, fetchSearchResult} from "../API/index"

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
    return popularShows
}

export const useGetMovieDetail = (type, id) => {

    const [detail, updateDetail] = React.useState([])
    useEffect(() => {
        try{
            fetchDetail(type, id)
            .then(data => {
                console.log(data.data)
                updateDetail(data.data)
            }).catch(err => {
                console.log(err)
            })
        }catch(err)
        {
            console.log(err)
        }
    }, [type, id])
    return detail
}
export const useGetResult = (type, search) => {
    const [result, updateResult] = useState()
    useEffect(() => {
        fetchSearchResult(type, search)
        .then(data => {
            updateResult(data.data['results'])
        }).catch(err => {
            console.log(err)
        })
    }, [type,search])
    return result
}