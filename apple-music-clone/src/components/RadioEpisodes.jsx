import { Col, Card } from "react-bootstrap"
import "./RadioEpisodes.css"

function RadioEpisodes() {
  return (
    <>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2a.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">Pròlogo con Abuelo</Card.Text>
              <i class="bi bi-explicit-fill"></i>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2b.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">The Wanderer</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2c.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">
                Michael Bublé & Carly Pearce
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2d.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">
                Stephan Moccio: The Zane Lowe Interview
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2e.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">
                Chart Spotlight: Julia Michaels
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className="z-0 mt-2" sm={4} md={2}>
        <Card className="radioCard border-0">
          <Card.Img
            className="rounded-3"
            variant="top"
            src="./src/assets/images/2f.png"
          />
          <Card.Body className="p-0 pt-1">
            <div className="d-flex flex-row justify-content-between">
              <Card.Text className="radioCard">
                Karri & Travis Mills Podcast
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default RadioEpisodes
