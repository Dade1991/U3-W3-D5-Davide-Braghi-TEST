import { Row, Col, Button } from "react-bootstrap"

function OtherToExplore() {
  return (
    <Col className="mt-5">
      <Row>
        <Col md={4}>
          <Button className="d-flex flex-row justify-content-between w-100">
            <p className="m-0">Esplora per genere</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="d-flex flex-row justify-content-between w-100">
            <p className="m-0">Esplora per genere</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="d-flex flex-row justify-content-between w-100">
            <p className="m-0">Esplora per genere</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

export default OtherToExplore
