import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Error() {
  return (
    <>
      <Layout>
        <div className="bg-theme text-white text-center">
          <h1 className="text-4xl font-bold py-20 sm:py-10 text-red-600">ERROR 404</h1>
          <h2 className="text-2xl font-semibold py-20 sm:py-15">PÁGINA NÃO ENCONTRADA</h2>
          <Link to="/" className="text-2xl font-semibold bg-red-600 rounded-xl sm:text-xl">Clique aqui para voltar a lista de filmes.</Link>
        </div>
      </Layout>
    </>
  )
}
