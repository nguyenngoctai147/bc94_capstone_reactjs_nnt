import { Outlet } from "react-router-dom";
import HeaderMovie from "./../../component/MovieLayout/Header";
import FooterMovie from "./../../component/MovieLayout/Footer";

export default function MovieTemplate() {
  return (
    <>
      <HeaderMovie />
      <Outlet />
      <FooterMovie />
    </>
  );
}
