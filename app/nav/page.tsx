"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import RegisterModal from "@/components/types/modal-login-register/register/page";
import LoginModal from "@/components/types/modal-login-register/login/page";

export default function Navigator() {
  return (
    <Navbar className="navBar">
      <NavbarBrand>
        <p className="font-bold text-inherit">VERI</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="productos">
            Categorias
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="http://localhost:3001/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="descuentos">
            Descuentos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <LoginModal />
        </NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <RegisterModal />
    </Navbar>
  );
}
