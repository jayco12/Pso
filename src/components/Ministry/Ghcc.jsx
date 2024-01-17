import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/pso.png";
import 'animate.css';
import ArrowDown  from '../../assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Ghcc= () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  return (
    <section className="ghcc" id="ministry">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h1>Great House Christian Centre</h1>
                  <TrackVisibility>
                  <Button
                    variant="outline-light"
                    className={`ab-button ${activeLink === 'ab' ? 'active' : ''}`}
                    onClick={() => {
                      navigate('/about');
                    }}
                  > <img src={ArrowDown} alt="Header Img"  />
                  </Button>
                  </TrackVisibility>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className="banimg">
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                  </div>
                </div>
              }

            </TrackVisibility> */}

          </Col>
        </Row>
      </Container>
    </section>
  )
}
