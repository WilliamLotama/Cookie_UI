import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
function NavbarHome() {
  return (
    <>
      <div className="container">
        <div className=" d-flex justify-content-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/header-logo_0d72dc14-6acd-4a74-b2d7-a61300319c07_300x.png?v=1628307905"
            alt=""
            style={{ width: "180px" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Same Day Delivery</Nav.Link>
                <Nav.Link href="#link">1 Day Pre Order</Nav.Link>
                <NavDropdown title="All Product" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Whole Cake</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Individual Dessert</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Limited Edition</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Add-Ons</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Delivery Fee & FAQ" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Delivery Fee</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">How To Choose The Flavour</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Allergen and Diet Information
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">How To Choose The Flavour</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Blogs</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarHome;
