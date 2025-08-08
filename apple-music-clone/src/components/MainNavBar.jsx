import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
