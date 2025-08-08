import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function MyTopBar() {
  return (
    <Navbar expand="lg" className="bg-dark d-lg-none">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        {/* Hamburger menu on the left */}
        <Navbar.Toggle aria-controls="mobile-navbar" className="text-white" />

        <div>
          <img
            src="./src/assets/logos/music.svg"
            alt="AppleMusic Logo"
            className="AppleLogoTop"
          />
        </div>

        <Navbar.Brand href="#home" className="text-white ms-2">
          Accedi
        </Navbar.Brand>
      </Container>

      <Navbar.Collapse id="mobile-navbar">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="px-0 text-white">
            <i className="NavBarIcons me-2 bi bi-house"></i> Home
          </Nav.Link>
          <Nav.Link href="#link" className="px-0 text-white">
            <i className="NavBarIcons me-2 bi bi-grid"></i> Novita
          </Nav.Link>
          <Nav.Link href="#link" className="px-0 text-white">
            <i className="NavBarIcons me-2 bi bi-broadcast"></i> Radio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyTopBar
