import { Outlet } from "react-router-dom";
import HeaderMovie from "./../../component/MovieLayout/Header";
import FooterMovie from "./../../component/MovieLayout/Footer";

export default function MovieTemplate() {
  return (
    <>
      <HeaderMovie />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <FooterMovie />
    </>
  );
}
