import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavMenu.scss";

function NavMenu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ag-Decor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Collection</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button className="shop-btn">Shop</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;
