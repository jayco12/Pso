import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/pso.png";
import 'animate.css';
import ArrowDown  from '../../assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Banner = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h1>Helping men find fulfilment in life through christ</h1>
                  <p>Pastor Segun Oduyebo is a man called by God to spread the gospel as God moves across the earth in these times.</p>
                  <TrackVisibility>
                  <Button
                    variant="outline-light"
                    className={`ab-button ${activeLink === 'ab' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/ab');
                      navigate('/about');
                    }}
                  > <img src={ArrowDown} alt="Header Img" />
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
