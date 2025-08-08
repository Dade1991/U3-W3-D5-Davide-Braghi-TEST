import { Nav, Form } from "react-bootstrap"

function MySideBar() {
  return (
    <div
      className="sidebar bg-dark text-white p-3 d-none d-lg-block position-fixed top-0 start-0 vh-100"
      style={{ width: "200px" }}
    >
      <div>
        <img
          src="../src/assets/logos/music.svg"
          alt="AppleMusic Logo"
          className="AppleLogoSide"
        />
      </div>
      <div className="my-4">
        <Form.Control
          type="Search"
          id="Main Search"
          aria-describedby="Search field"
        />
      </div>
      <Nav className="flex-column">
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
    </div>
  )
}

export default MySideBar
