import { Outlet } from "react-router-dom";
import HeaderMovie from "../../component/HeaderMovie";
import FooterMovie from "../../component/FooterMovie";

export default function MovieTemplate() {
  return (
    <>
      <HeaderMovie />
      <Outlet />
      <FooterMovie />
    </>
  );
}
