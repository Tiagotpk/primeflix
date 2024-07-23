import axios from 'axios'

// API KEY
// BASE: https://api.themoviedb.org/3/
// ROTAS: movie/550?api_key=81f3776d9ca6cde2e9c1a67e47533f97


const api = axios.create({
baseURL:'https://api.themoviedb.org/3/'

})

export default api;