import React from 'react'
import { Container,Row,Col,Form,FormControl,Button } from 'react-bootstrap';
import Updatenav from './Updatenav';
import Content from './Content';

const Information= () => (
  <div>
    <Container>
      <Row>
        <Col sm="3" className="bg-light mt-2 rounded">
          <Updatenav></Updatenav>
        </Col>
        <Col>
          <Form className="mt-2 mb-2 bg-light p-2 rounded">
            <Row>
            <Col sm="10">
             <FormControl type="text" placeholder="Search" />
             </Col>
             <Col sm="2">
             <Button variant="outline-success">Search</Button>
             </Col>
             </Row>
           </Form>
          <Content ></Content>
        </Col>
      </Row>
    </Container>

  </div>
)


export default Information