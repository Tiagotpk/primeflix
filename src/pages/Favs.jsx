import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { toast } from "react-toastify";

export default function Favs() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function excludeItem(id){
    let movieFilter = movies.filter( (item) => {
      return (item.id !== id)
    })
    setMovies(movieFilter)
    localStorage.setItem("@primeflix", JSON.stringify(movieFilter))
    toast.success("Filme Excluído com Sucesso!")
  }

  return (
    <>
      <Layout>
        <div className="text-center mt-10">
          <h1 className="text-6xl font-bold sm:text-2xl mb-10">Meus Filmes</h1>
          {movies.length === 0 && <span className="font-semibold text-4xl">Você não possui nenhum filme adicionado. :( </span>}
          <div className="mt-5">
            <ul>
              {movies.map((item) => {
                return (
                  <li key={item.id} className="">
                    <span>{item.title}</span>
                    <div className="space-x-5 my-2">
                      <Link to={`/movie/${item.id}`} className="text-white bg-blue-500 hover:bg-green-400 rounded p-1">Ver detalhes</Link>
                      <button className="text-white bg-red-500 rounded p-1 hover:bg-theme" onClick={() => excludeItem(item.id)}>Excluir</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
