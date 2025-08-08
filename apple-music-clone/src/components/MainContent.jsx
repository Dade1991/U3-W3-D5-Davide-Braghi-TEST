import { Container, Row, Col, Card } from "react-bootstrap"

function MainContent() {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 11, offset: 2 }}>
          <h1>Novità</h1>
          <hr />
          <Row>
            <Col md={6}>
              <div className="mb-5">
                <h3>NUOVA STAZIONE RADIO</h3>
                <p>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </p>
              </div>
              <div className="w-100">
                <img
                  src="./src/assets/images/1a.png"
                  alt="Apple Music Radio"
                  className="w-100"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="mb-5">
                <h3>NUOVA STAZIONE RADIO</h3>
                <p>Ecco la nuova casa della musica Italiana</p>
              </div>
              <div className="w-100">
                <img
                  src="./src/assets/images/1a.png"
                  alt="Apple Music Radio"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <h2>
              Nuovi episodi radio <i class="bi bi-caret-right"></i>
            </h2>
            {/* <Card.Img variant="top" src="./src/assets/images/2a.png" /> */}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainContent
