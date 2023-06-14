import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../images/logo.svg";

function NavScrollExample() {
  return (
    <Navbar bg="light" className="p-3" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Shop Cart Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-3 w-100 justify-content-center" navbarScroll>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item>Popular Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Deals</Nav.Link>
            <Nav.Link href="#">What's New</Nav.Link>
            <Nav.Link href="#">Delivery</Nav.Link>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="px-4 border p-2 rounded-pill " aria-label="Search" style={{ width: "300px" }} />
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="buttons d-flex gap-3">
          <Nav.Link href="#">Account</Nav.Link>
          <Nav.Link href="#">Cart</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
