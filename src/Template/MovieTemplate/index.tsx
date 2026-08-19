import { Outlet } from "react-router-dom";
import HeaderMovie from "../../component/HeaderMovie";
import FooterMovie from "../../component/FooterMovie";

export default function MovieTemplate() {
  return (
    <>
      <HeaderMovie />
      <main className="w-full flex-1 bg-white px-2 sm:px-0">
        <Outlet />
      </main>
      <FooterMovie />
    </>
  );
}
