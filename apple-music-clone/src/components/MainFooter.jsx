import { Col } from "react-bootstrap"
import "./MainFooter.css"

function MainFooter() {
  return (
    <>
      <Col
        className="footerContainer2 ps-4 py-4 pe-0"
        lg={{ span: 10, offset: 2 }}
      >
        <p>
          <span className="footerWhite fw-bold me-2">Italia</span> &#124;{" "}
          <span className=" ms-2">English&#40; UK&#41;</span>
        </p>
        <p className="fw-bold mb-1">
          <span>Copyright &#169; {new Date().getFullYear()}</span>{" "}
          <span className="footerWhite"> Apple Inc. </span>{" "}
          <span>Tutti i diritti riservati.</span>
        </p>
        <p>
          <a href="#" className="footerWhite text-decoration-none fw-bold me-2">
            Condizioni dei servizi internet
          </a>{" "}
          &#124;{" "}
          <a
            href="#"
            className="footerWhite text-decoration-none fw-bold me-2 ms-2"
          >
            Apple Music e privacy
          </a>{" "}
          &#124;{" "}
          <a
            href="#"
            className="footerWhite text-decoration-none fw-bold me-2 ms-2"
          >
            Avviso sui cookie
          </a>{" "}
          &#124;{" "}
          <a
            href="#"
            className="footerWhite text-decoration-none fw-bold me-2 ms-2"
          >
            Supporto
          </a>{" "}
          &#124;{" "}
          <a
            href="#"
            className="footerWhite text-decoration-none fw-bold me-2 ms-2"
          >
            Feedback
          </a>
        </p>
      </Col>
    </>
  )
}

export default MainFooter
