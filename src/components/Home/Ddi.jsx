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
                  <p>Destiny Development Initiative(DDI) is a Non-Governmental Organization that specializes in Human Capital Development and Organizational training and management. The organization is geared towards becoming one of the leading organizations in the social service space of African communities by creating, organizing, and providing resource materials, training, opportunities, service, environment, experience, and exposure that will help people develop needed skills and potential for effective and efficient living.

Its central mode of operation is towards economic empowerment, education promotion, preventive and curative health for development, human rights and good governance strategies, sport and entertainment, ICT empowerment, and youth voluntarism and internship. 

DDI through its subsidiaries DDI Consult Ltd., DDI Social Services, and DDI Micro Scheme has been able to make prominent social impacts such as educating and empowering youths, creating, organizing, and providing resource materials for training, providing opportunities and exposure that will help as many people as possible to develop needed skills and potentials for effective and efficient living, care, and support for vulnerable women and children, and providing sustainable and high quality financial and non-financial solutions with top-notch services for micro-entrepreneurs in rural communities to strengthen their economic conditions. 

This has therefore helped to bring improvements to people's lives, thus, helping them in fulfilling their diverse dreams and aspirations.      
                  </p>
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
