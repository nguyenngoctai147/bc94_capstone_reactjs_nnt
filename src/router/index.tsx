import { createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import {
  AdminTemplate,
  Auth,
  GioiThieu,
  LienHe,
  MovieTemplate,
  RapPhim,
  Sua,
  Them,
  TrangChu,
} from "./lazyPage";

export const router = createBrowserRouter([
  {
    path: paths.trangchu,
    element: <MovieTemplate />,
    children: [
      { index: true, element: <TrangChu /> },
      { path: paths.gioithieu, element: <GioiThieu /> },
      { path: paths.rapphim, element: <RapPhim /> },
      { path: paths.lienhe, element: <LienHe /> },
    ],
  },
  {
    path: paths.admin,
    element: <AdminTemplate />,
    children: [
      { path: paths.them, element: <Them /> },
      { path: paths.sua(), element: <Sua /> },
    ],
  },
  {
    path: paths.auth,
    element: <Auth />,
  },
]);
