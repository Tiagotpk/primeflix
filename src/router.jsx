import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favs from "./pages/Favs";
import Error from "./pages/Error";



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movies />} />
        <Route path="/favs" element={<Favs/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>

  );
}
