import { lazy } from "react";

export const MovieTemplate = lazy(() => import("./../Template/MovieTemplate"));
export const TrangChu = lazy(() => import("./../pages/MoviePage/TrangChu"));
export const GioiThieu = lazy(() => import("./../pages/MoviePage/GioiThieu"));
export const RapPhim = lazy(() => import("./../pages/MoviePage/RapPhim"));
export const LienHe = lazy(() => import("./../pages/MoviePage/LienHe"));
export const TimKiem = lazy(() => import("./../pages/MoviePage/TimKiem"));

export const AdminTemplate = lazy(() => import("./../Template/AdminTemplate"));
export const Admin = lazy(() => import("./../pages/AdminPage/"));
export const Them = lazy(() => import("./../pages/AdminPage/FeaturesCRUD/Them"));
export const Sua = lazy(() => import("./../pages/AdminPage/FeaturesCRUD/[id]/Sua"));
export const Auth = lazy(() => import("./../pages/AdminPage/Auth"));
