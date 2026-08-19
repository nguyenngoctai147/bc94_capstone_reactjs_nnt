import { Button, Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";

export default function HeaderMovie() {
  return (
    <header>
      <Navbar
        fluid
        className="mx-auto w-full max-w-[100%] rounded-none px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-screen-xl lg:px-0"
      >
        <Link to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite React
          </span>
        </Link>
        <div className="flex md:order-2">
          <Button>Đăng nhập</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="gioi-thieu">Giới thiệu</NavLink>
          <NavLink to="rap-phim">Rạp phim</NavLink>
          <NavLink to="#">Dịch vụ ưu đãi</NavLink>
          <NavLink to="lien-he">Liên hệ</NavLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
