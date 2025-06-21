import React, { useEffect, useState, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImClubs } from "react-icons/im";
import { useSelector, useDispatch } from 'react-redux';
import { languageChange } from '../../actions/LanguageChangeAction';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

const NAV_ITEMS = [
  {
    to: "/",
    icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
    label: " Home"
  },
  {
    to: "/about",
    icon: <AiOutlineUser style={{ marginBottom: "2px" }} />,
    label: " About"
  },
  {
    to: "/project",
    icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />,
    label: " Projects"
  },
  {
    to: "/member",
    icon: <ImClubs style={{ marginBottom: "2px" }} />,
    label: " Members"
  }
];

function NavBar() {
  const language = useSelector(state => state.language.language);
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const dispatch = useDispatch();

  const scrollHandler = useCallback(() => {
    setNavColour(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('zentech-language') === null) {
      localStorage.setItem('zentech-language', 'English');
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  const changeLanguageHandle = () => {
    const nextLanguage = localStorage.getItem('zentech-language') === 'English' ? 'Japanese' : 'English';
    localStorage.setItem('zentech-language', nextLanguage);
    dispatch(languageChange({ type: 'LANGUAGECHANGE', currentLanguage: nextLanguage }));
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {NAV_ITEMS.map((item, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link as={Link} to={item.to} onClick={() => setExpand(false)}>
                  {item.icon}
                  {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/pioneer82"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                className="fork-btn-inner"
                onClick={changeLanguageHandle}
              >
                {language === "English" ? "Japanese" : "English"}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;