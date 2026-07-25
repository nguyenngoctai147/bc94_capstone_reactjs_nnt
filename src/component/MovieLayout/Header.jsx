import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <header>
      <Navbar fluid className="py-4">
        <NavbarBrand as={NavLink} to="/">
          <img
            src="./images/logo-cinema.svg"
            className="mr-3 h-8 bg-white sm:h-20"
            alt="Logo"
          />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>Đăng nhập</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink active as={NavLink} to="/">
            Trang chủ
          </NavbarLink>
          <NavbarLink as={NavLink} to="/gioi-thieu">
            Giới thiệu
          </NavbarLink>
          <NavbarLink as={NavLink} to="/rap-phim">
            Rạp phim
          </NavbarLink>
          <NavbarLink as={NavLink} to="#">
            Ưu đãi khách hàng
          </NavbarLink>
          <NavbarLink as={NavLink} to="/lien-he">
            Liên hệ
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
