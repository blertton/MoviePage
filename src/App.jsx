import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import MoviePage from "./pages/MoviePage";
import TvShow from "./pages/TvShowPage";
import ShowDetails from "./pages/ShowDetails";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv-show" element={<TvShow />} />
        <Route path="/tv-details/:id" element={<ShowDetails />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
