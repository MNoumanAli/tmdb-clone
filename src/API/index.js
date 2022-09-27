import axios from 'axios'

const API_KEY = "6b8627752ab6d376cf385ffb7eae26ec"

const API = axios.create({baseURL : "https://api.themoviedb.org/3"})

export const getPopularMovies = async () => await API.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
