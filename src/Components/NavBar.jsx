import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../Icons/Logo";

export const NavBar = () => {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link href="/" aria-current="page">
          <AcmeLogo />
          <p className="font-bold text-inherit">Academia</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="shadow">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/registration" variant="flat">
            Registration
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
