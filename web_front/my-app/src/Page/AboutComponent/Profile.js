import React from 'react';

import {Card,Container,Col,Row} from 'react-bootstrap'

const Profile = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Card className="text-center" style={{marginTop:'5rem',width:'18rem'}}>
            <Card.Img variant="top" style={{marginLeft:'3rem',marginTop:'1rem',width:'12rem'}} src={process.env.PUBLIC_URL +'/images/user.svg'} />
            <Card.Body>
              <Card.Title>Ting-Hung Chen</Card.Title>
              <Card.Text>
                <ul>
                  <li>University of Bristol</li>
                  <li>Backend Design</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{marginTop:'5rem',width:'18rem'}}>
            <Card.Img variant="top" style={{marginLeft:'3rem',marginTop:'1rem',width:'12rem'}} src={process.env.PUBLIC_URL +'/images/user.svg'} />
            <Card.Body>
              <Card.Title>Yu-Ting Lan</Card.Title>
              <Card.Text>
                <ul>
                  <li>University of Bristol</li>
                  <li>Backend Design</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center" style={{marginTop:'5rem',width:'18rem'}}>
            <Card.Img variant="top" style={{marginLeft:'3rem',marginTop:'1rem',width:'12rem'}} src={process.env.PUBLIC_URL +'/images/user.svg'} />
            <Card.Body>
              <Card.Title>Otto Brookes</Card.Title>
              <Card.Text>
                <ul>
                  <li>University of Bristol</li>
                  <li>Backend Design</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Profile
