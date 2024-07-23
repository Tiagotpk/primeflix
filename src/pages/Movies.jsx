import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/Api";
import { toast } from "react-toastify";

export default function Movies() {
  const { id } = useParams();
  const nav = useNavigate();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    async function loadFilm() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "81f3776d9ca6cde2e9c1a67e47533f97",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilm(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("filme não encontrado.");
          nav("/", { replace: true });
          return;
        });
    }

    // Verificar se o filme já está salvo
    const myList = localStorage.getItem("@primeflix");
    const savedMovies = JSON.parse(myList) || [];
    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === parseInt(id));
    setIsSaved(hasMovie);

    loadFilm();

    return () => {
      console.log("Componente desmontado.");
    };
  }, [nav, id]);

  function saveMovie() {
    const myList = localStorage.getItem("@primeflix");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === film.id);

    if (hasMovie) {
      toast.warn("Filme já salvo");
      return;
    }

    savedMovies.push(film);
    localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
    setIsSaved(true);
    toast.success("Filme salvo com Sucesso");
  }

  if (loading) {
    return (
      <div className="text-6xl font-bold m-20 mt-56 text-center justify-center md:text-2xl sm:text-xl">
        <h1 className="animate-pulse">Carregando os detalhes . . .</h1>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="text-center items-center justify-center p-10">
          <h1 className="font-bold text-6xl sm:text-2xl py-2">{film.title}</h1>
          <div className=" grid grid-cols-2 sm:grid-cols-1">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}
                alt={film.overview}
                className="w-full text-center rounded-2xl"
              />
            </div>
            <div className="mt-10">
              <h3 className="text-4xl mb-10 font-semibold sm:text-2xl">Sinopse</h3>
              <p className="mx-4">{film.overview} </p>
              <p className="mt-10 font-bold text-4xl sm:text-xl">
                Avaliação: {film.vote_average.toFixed(2)} / 10{" "}
                <strong className="text-yellow-600 text-4xl sm:text-xl">★</strong>{" "}
              </p>
              <div className=" space-x-5 font-bold mt-10 -mb-10">
                <button
                  onClick={saveMovie}
                  className=" bg-theme hover:text-red-600 text-gray-50 rounded text-xl p-1 "
                >
                  {isSaved ? "Salvo" : "Salvar"}
                </button>
                <button className=" bg-theme hover:text-red-600 text-gray-50 rounded text-xl p-1">
                  <a
                    href={`https://youtube.com/results?search_query=${film.title} Trailer`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trailer
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}