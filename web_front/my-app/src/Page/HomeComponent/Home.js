import React from 'react'
import {Container,Row,Col,Form, Button, ButtonToolbar} from 'react-bootstrap'
import './Home.css'
const Home = (props) => (
  <div>
    <Container>
      <Row className="justify-content-md-center">
        <Col sm= {3}>
          <div>Text Here</div>
        </Col>
        <Col sm={9} >
          <Row className="justify-content-md-center">
            <Form>
              <Form.Group controlId="formTextarea">
                <Form.Label>Posting</Form.Label>
                <Form.Control placeholder="Share something today" as="textarea" rows="3" cols="80"/>
                <ButtonToolbar>
                  <Button size='sm' variant="outline-secondary">Film</Button>
                  <Button size='sm' variant="outline-secondary">Image</Button>
                  <Button as="input" type="submit" value="Submit" />
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Row>
          <Row>

          </Row>
        </Col>
      </Row>
    </Container>
    {props.children}
  </div>

);
    

export default Home