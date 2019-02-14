import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const Home = (props) => (
  <div>
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div>Text Here</div>
        </Col>
        <Col>
          <div>
            Post Here
          </div>
        </Col>
      </Row>
    </Container>
    {props.children}
  </div>

);
    

export default Home