import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import LoadingSpinner from "./component/common/LoadingSpinner";

import MovieTemplate from "./pages/MovieTemplate";
import TrangChu from "./pages/MovieTemplate/TrangChu";
import GioiThieu from "./pages/MovieTemplate/GioiThieu";
import RapPhim from "./pages/MovieTemplate/RapPhim";
import LienHe from "./pages/MovieTemplate/LienHe";

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner label="Đang tải trang..." />}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MovieTemplate />}>
            <Route path="/" element={<TrangChu />} />
            <Route path="gioi-thieu" element={<GioiThieu />} />
            <Route path="rap-phim" element={<RapPhim />} />
            <Route path="lien-he" element={<LienHe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
