import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import MoviesIndexPage from "./pages/MoviesIndexPage.jsx";
import MoviesShowPage from "./pages/MoviesShowPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movies">
            <Route index element={<MoviesIndexPage />} />
            <Route path="/movies/:id" element={<MoviesShowPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
