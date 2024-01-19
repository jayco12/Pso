import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import headerImg from "../../assets/ddi/ddi9.JPG";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";
import navIcon3 from "../../assets/nav-icon3.svg"
import TrackVisibility from 'react-on-screen';
export const Ddi = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  return (
    <section className="ddi" id="ddi">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={5} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="log">
                  <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>
                </div>
              }

            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7} className="colm"  >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h1>DDI: Destiny Development Initiative</h1>
                  <p>Pastor Segun is a prolific trainer, with a transformational leadership gift and the ability to replicate himself in his trainees. This is a skill he has developed and it is also a spiritual endowment for his Apostolic call.
                    <br /><br />
                    He is also a thought-leader, promoting Spirituality and Christian Culture through his Youtube page Olusegun Oduyebo  Live.
                    <br /><br />
                    Besides GHCC, He also is a destiny coach</p>
                  
                  <Button
                    variant="outline-light"
                    className={`waitlist-button ${activeLink === 'waitlist' ? 'active' : ''}`}
                    onClick={() => {
                      navigate('/para');
                    }}
                  >
                    Gallery
                  </Button>
                </div>
              }

            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
