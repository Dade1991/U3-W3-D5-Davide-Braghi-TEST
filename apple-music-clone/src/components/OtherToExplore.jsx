import { Row, Col, Button } from "react-bootstrap"
import "./OtherToExplore.css"

function OtherToExplore() {
  return (
    <Col>
      <Row className="g-3">
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Esplora per genere</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">WorldWide</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Video musicali</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Decenni</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Classifiche</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Nuovi Artisti</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Attività e stati d'animo</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Audio spaziale</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
        <Col md={4}>
          <Button className="exploreButton d-flex flex-row justify-content-between w-100 p-2 px-3">
            <p className="m-0">Hit del passato</p>
            <i class="bi bi-caret-right"></i>
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

export default OtherToExplore
