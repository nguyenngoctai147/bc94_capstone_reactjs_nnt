import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieTemplate from "./pages/MovieTemplate";
import TrangChu from "./pages/MovieTemplate/TrangChu";
import GioiThieu from "./pages/MovieTemplate/GioiThieu";
import RapPhim from "./pages/MovieTemplate/RapPhim";
import LienHe from "./pages/MovieTemplate/LienHe";

import AdminTemplate from "./pages/AdminTemplate";
import Auth from "./pages/AdminTemplate/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MovieTemplate />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="gioi-thieu" element={<GioiThieu />} />
          <Route path="rap-phim" element={<RapPhim />} />
          <Route path="lien-he" element={<LienHe />} />
        </Route>
        <Route path="dashboard" element={<AdminTemplate />}>
          <Route path="add-user" />
        </Route>
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
