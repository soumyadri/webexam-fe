import LogoutIcon from '@mui/icons-material/Logout';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AcmeLogo } from "../Icons/Logo";

export const NavBar = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logoutUrl = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link href="/" aria-current="page">
          <AcmeLogo />
          <p className="font-bold text-inherit">Academia</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <>
          {userData ? (
            <>
              <User
                name={userData.first_name + " " + userData.last_name}
                description={userData.role}
                avatarProps={{
                  src:
                    userData.gender === "male"
                      ? "data:image/jpeg;base64,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"
                      : "https://st2.depositphotos.com/1665130/8618/v/450/depositphotos_86182402-stock-illustration-vector-beautiful-woman-wearing-colorful.jpg",
                }}
              />
              <Button isIconOnly color="danger" aria-label="Like" onClick={logoutUrl}>
                <LogoutIcon />
              </Button>
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button as={Link} color="primary" href="/registration" variant="shadow">
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href="/registration?tab=sign-up"
                  variant="flat"
                >
                  Registration
                </Button>
              </NavbarItem>
            </>
          )}
        </>
      </NavbarContent>
    </Navbar>
  );
};
