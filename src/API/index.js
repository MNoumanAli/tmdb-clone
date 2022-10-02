import axios from 'axios'

const API_KEY = "6b8627752ab6d376cf385ffb7eae26ec"

const API = axios.create({baseURL : "https://api.themoviedb.org/3"})

export const fetchPopularMovies = async () => await API.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
export const fetchPopularShows = async () => await API.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
export const fetchDetail = async (type,id) => await API.get(`/${type}/${id}?api_key=${API_KEY}&language=en-US&page=1`)
export const fetchSearchResult = async (type, value) => await API.get(`/search/${type}?api_key=${API_KEY}&language=en-US&page=1&query=${value}&include_adult=false`)
export const fetchKeyWords = async (type, id) => await API.get(`/${type}/${id}/keywords?api_key=${API_KEY}`)
export const fetchKeyWordData = async(id) => await API.get(`/keyword/${id}?api_key=${API_KEY}`)