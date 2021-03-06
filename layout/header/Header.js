import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import GithubDetailsMenuElement from'@github/details-menu-element';
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap"; //module
import { signIn, signOut, useSession } from "next-auth/react";
// import { IoMail, IoMailUnread} from 'react-icons/io5';
import logo from "../../assets/images/logos/probby_logo.png";
import { Button } from "react-bootstrap";

const Header = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  // const [read, setRead] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} width="125px" height="70px" />
            </NavbarBrand>

            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                {/* <NavItem className={session ? "" : "hide"}>
                  <Link href="/project-dashboard">
                    <a
                      className={
                        router.pathname == "/project"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Project
                    </a>
                  </Link>
                </NavItem> */}
                <NavItem>
                  <Link href="/toolhelp/github">
                    <a
                      className={
                        router.pathname == "/toolhelp/github"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Tool Help
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <Button
                  variant="outline-warning"
                  onClick={() => {
                    if (session) {
                      signOut();
                    } else if (!session) {
                      signIn("google");
                    }
                  }}
                >
                  {session ? "Logout" : "Login"}
                </Button>
              </div>
            </Collapse>
            <style jsx>{`
              a {
                font-family: "Baskin_R";
                font-size: 15px;
              }
            `}</style>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
