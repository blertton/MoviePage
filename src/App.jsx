import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import MoviePage from "./pages/MoviePage";
import TvShow from "./pages/TvShow";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv-show" element={<TvShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
