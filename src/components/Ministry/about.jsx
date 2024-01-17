import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const About = () => {
  return (
    <section className="aboutghcc" id="about">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={6} className="red">
            <TrackVisibility>
              {({ isVisible }) =>

                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p>“
                    Now in a great house there are not only vessels of gold and silver but also of wood and clay, some for honorable use, some for dishonorable.</p>
                  <p>2 Timothy 2:20</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6} className="white">
            <TrackVisibility>
              {({ isVisible }) =>

                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <p>God instructed Pastor Segun Oduyebo to come to Ilesa in 2005. God used his son Segun Oduyebo to start the church- GREAT HOUSE CHRISTIAN CENTRE started in 2006. On March 14, 2006 to be precise, the church started on a rented landed property which was a refuse dump.
                    <br /><br />
                    That Tuesday, the first service held, and it eventually became the church weekly service called Champions meal and later changed to Walk with God service. On the 26th of June, 2006, the first Sunday service started with 8 people in attendance.
                    <br /><br />
                    In January 2007, the church was officially inaugurated by Bishop Taiwo Adelakun from Victory International Cathedral, Ibadan. The church had its first-year anniversary in June 2007</p>

                </div>
              }

            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
