import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import api from "../services/Api"
import { Link } from "react-router-dom"

//URL API movie/now_playing?api_key=81f3776d9ca6cde2e9c1a67e47533f97&language=pt-BR

export default function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

 
  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: "81f3776d9ca6cde2e9c1a67e47533f97",
          language:"pt-BR",
          page: 1,
        }
      })

      setFilmes(response.data.results.slice(0,12))
      setLoading(false)
    }
    loadFilmes()
  })

  if(loading){
    return(
      <div className="text-8xl font-bold m-20 mt-56 text-center justify-center md:text-2xl sm:text-xl">
        <h1 className="animate-pulse">Carregando . . .</h1>
      </div>
    )
  }
  
  return (
    <>
      <Layout>
        <div className="text-2xl text-center font-semibold">
          <div className="grid mt-20 md:grid-cols-1 sm:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5 sm:mx-3">
            {filmes.map((filmes) => {
              return(
                <article key={filmes.id} className="relative p-10 border-2 rounded-3xl border-gray-400 text-center">
                  <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-gray-400 hover:opacity-80 text-white rounded-3xl">
                  <h1 className="text-4xl font-semibold">{filmes.title}</h1>
                  <Link to={`/movie/${filmes.id}`} className="border-2 rounded border-white p-2 hover:bg-red-500 py-2 px-5 mt-5">Acessar</Link>
                  </div>
                  <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.overview}  className="w-full text-center" />
                </article>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}
