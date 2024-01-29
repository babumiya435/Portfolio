import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import myImg from "../Assets/svg/avatar.svg";
import { useLocation } from 'react-router-dom';
import { IoDocumentAttachOutline } from "react-icons/io5";
import { SiFuturelearn } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import LikeCounter from "./likeCounter";

function NavBar() {
  const location = useLocation();
  const path = location.pathname.slice(1) ? location.pathname.slice(1) : "home";
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const [selectedItem, setSelectedItem] = useState(path);

  useEffect(() => {
    // Your method or logic to be executed when the path changes
    handleItemClick(path.indexOf("content-details") ? path : "tech-learning")

    // Cleanup function (if needed)
    return () => {
      // Any cleanup logic you want to perform when the component is unmounted
    };
  }, [path]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Add any other logic you need when an item is clicked
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={myImg} className="img-fluid logo" alt="avatar" />
        </Navbar.Brand>
        {/* <Navbar.Brand>
          <LikeCounter />
        </Navbar.Brand> */}
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
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className={`nav-item ${selectedItem === 'home' ? 'selected' : ''}`}
              onClick={() => handleItemClick('home')}>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`nav-item ${selectedItem === 'about' ? 'selected' : ''}`}
              onClick={() => handleItemClick('about')}>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`nav-item ${selectedItem === 'projects' ? 'selected' : ''}`}
              onClick={() => handleItemClick('projects')}>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`nav-item ${selectedItem === 'resume' ? 'selected' : ''}`}
              onClick={() => handleItemClick('resume')}>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <GrDocumentDownload style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={`nav-item ${selectedItem === 'tech-learning' ? 'selected' : ''}`}
              onClick={() => handleItemClick('tech-learning')}>
              <Nav.Link
                as={Link}
                to="/tech-learning"
                onClick={() => updateExpanded(false)}
              >
                <FaLaptopCode style={{ marginBottom: "2px" }} /> Tech Learning
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://babumiyablogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/babumiya435/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
