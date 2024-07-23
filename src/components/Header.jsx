
import { Link } from 'react-router-dom'

export default function Header() {
  const menuItens = [
    {
      title: "Home",
      key: "/"
    },
    {
      title: "Filmes",
      key: "/movies"
    },
    {
      title: "Favoritos",
      key: "/favs"
    },
  ]

  const pathName = window.location.pathname

  return (
    <div className='text-white font-mont'>
      <div className={"flex bg-theme justify-between items-center p-2 shadow-lg"}>
        <div className='flex justify-between w-full items-center '>
          <h1 className='sm:text-xl md:text-2xl text-4xl font-semibold text-red-600 hover:text-gray-300 ml-2'>
            <Link to="/">
            Prime Flix
            </Link>
            </h1>
        </div>

         <div className="flex" >
            {menuItens.map((item) => {
              return (
                <li key={item.key} className={`sm:text-sm sm:mx-1 list-none mx-5 p-1 ${item.key == pathName && 'bg-white text-black rounded-md'}`}>
                  <Link to={`${item.key}`}>{item.title}</Link>
                </li>
              )
            })}
        </div>
      </div> 
    </div>
  )
}