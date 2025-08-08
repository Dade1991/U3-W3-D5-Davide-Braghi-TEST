import { Container, Row, Col } from "react-bootstrap"
import RadioEpisodes from "./RadioEpisodes"
import OtherToExplore from "./OtherToExplore"
// import NewReleases from "./NewReleases"

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
                  className="w-100 rounded-3"
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
                  src="./src/assets/images/1b.png"
                  alt="Apple Music Radio"
                  className="w-100 rounded-3"
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <h2>
              Nuovi episodi radio <i class="bi bi-caret-right"></i>
            </h2>
            <RadioEpisodes />
            {/* <NewReleases /> */}
          </Row>
          <Row>
            <OtherToExplore />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MainContent
