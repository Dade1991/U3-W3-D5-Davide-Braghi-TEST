import { Col, Card } from "react-bootstrap"

// import RadioEpisode from "./RadioEpisode"
{
  /* <RadioEpisode /> */
}

function RadioEpisode() {
  return (
    <Col className="mt-2" md={2}>
      <Card>
        <Card.Img variant="top" src="./src/assets/images/2a.png" />
        <Card.Body>
          <Card.Text>QUI TESTO</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RadioEpisode
