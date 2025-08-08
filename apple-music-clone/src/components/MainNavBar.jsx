import { Container, Row, Col } from "react-bootstrap"
import MySideBar from "./MySideBar"
import MyTopBar from "./MyTopBar"

function MainNavBar() {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0" lg={2}>
          <MySideBar />
        </Col>
        <Col className="p-0" lg={10}>
          <MyTopBar />
        </Col>
      </Row>
    </Container>
  )
}

export default MainNavBar
