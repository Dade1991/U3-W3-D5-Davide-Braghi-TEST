import { Container, Row, Col } from "react-bootstrap"
import RadioEpisodes from "./RadioEpisodes"
import OtherToExplore from "./OtherToExplore"
import MainFooter from "./MainFooter"
import NewReleases from "./NewReleases"
import MusicPlayer from "./MusicPlayer"
import "./MainContent.css"

function MainContent() {
  return (
    <>
      <Container>
        <Row>
          <MusicPlayer />
          <Col className="px-0" lg={{ span: 10, offset: 2 }}>
            <div className="mt-3">
              <h1>Novità</h1>
              <hr />
            </div>
            <Row>
              <Col md={6} className="d-flex flex-column">
                <div className="mb-5 flex-grow-1">
                  <h3>NUOVA STAZIONE RADIO</h3>
                  <p className="pTopMain">
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

              <Col md={6} className="d-flex flex-column">
                <div className="mb-5 flex-grow-1">
                  <h3>NUOVA STAZIONE RADIO</h3>
                  <p className="pTopMain">
                    Ecco la nuova casa della musica Italiana
                  </p>
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
            <Row className="mt-5 g-3">
              <h2>
                Nuovi episodi radio <i class="arrowIcon bi bi-caret-right"></i>
              </h2>
              <RadioEpisodes />
            </Row>
            <Row className="mt-3 g-3">
              <h2>
                Nuove uscite <i class="arrowIcon bi bi-caret-right"></i>
              </h2>
              <NewReleases />
            </Row>
            <Row className="mt-5 mb-5">
              <h2>Altro da esplorare</h2>
              <OtherToExplore />
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footerContainer">
        <Row>
          <MainFooter />
        </Row>
      </Container>
    </>
  )
}

export default MainContent
