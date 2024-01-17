import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Ministry = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  return (
    <section className="ministry" id="ministry">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                    "animate__animated animate__fadeIn"
                    : ""
                }>

                  <h1> Great House Christian Centre</h1>
                  <p>Pastor Segun is a prolific trainer, with a transformational leadership gift and the ability to replicate himself in his trainees. This is a skill he has developed and it is also a spiritual endowment for his Apostolic call.
                    <br /><br />
                    He is also a thought-leader, promoting Spirituality and Christian Culture through his Youtube page Emmanuel Iren Live.
                    <br /><br />
                    Besides GHCC, He also is a destiny coach. </p>
                </div>

              }

            </TrackVisibility>
            <Button
              variant="outline-light"
              className={`waitlist-button ${activeLink === 'waitlist' ? 'active' : ''}`}
              onClick={() => {
                navigate('/ministry');
              }}
            >
              More
            </Button>
          </Col>

        </Row>
      </Container>
    </section>
  )
}