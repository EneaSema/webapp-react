import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import MoviesList from "./pages/MoviesList.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
