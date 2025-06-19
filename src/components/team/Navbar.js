import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Assets/logo.png";
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

function NavBar(props) {
  const language = useSelector(state => state.language.language);
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const dispatch = useDispatch();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    if (localStorage.getItem('zentech-language') === null)
      localStorage.setItem('zentech-language', 'English');
  }, [language])

  const changeLanguageHandle = () => {
    if (localStorage.getItem('zentech-language') === 'English') {
      localStorage.setItem('zentech-language', 'Japanese');
    }
    else {
      localStorage.setItem('zentech-language', 'English');
    }
    dispatch(languageChange({ type: 'LANGUAGECHANGE', currentLanguage: localStorage.getItem('zentech-language') }));

  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* home btn */}
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} />
                {
                  language === 'English' ? ' Home' : ' 家'
                }
              </Nav.Link>
            </Nav.Item>

                {/* About for us btn */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} />
                {
                  language === 'English' ? ' About' : 'について'
                }
              </Nav.Link>
            </Nav.Item>


                {/* our team projects btn */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {
                  language === 'English' ? 'Projects' : 'プロジェクト'
                }
              </Nav.Link>
            </Nav.Item>

            {/* 
            <Nav.Item>
              <Nav.Link
                // as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* our team btn */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/member"
                onClick={() => updateExpanded(false)}
              >
                <ImClubs style={{ marginBottom: "2px" }} />
                {
                  language === "English" ? "Members" : 'メンバー'
                }
              </Nav.Link>
            </Nav.Item>

                {/* samir git link */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/pioneer82/samir-pioneer"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            {/* language change btn */}
            <Nav.Item className="fork-btn">
              <Button
                className="fork-btn-inner"
                onClick={() => changeLanguageHandle()}
              >
                {
                  language === "English" ? "Japanese" : "English"
                }
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
