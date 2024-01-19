import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/group.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Books = () => {
  return (
    <section className="books" id="books">
      <Container>
      <h2>Books</h2>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={6}>
            
            <h1>Coming soon</h1>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className="banimg">
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                  </div>
                </div>
              }

            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
