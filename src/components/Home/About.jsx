import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/ps.jpg";
import 'animate.css';
import ArrowDown  from '../../assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const About = () => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  return (
    <section className="about" id="about">
      <Container>
      <h1>Pastor Segun Oduyebo</h1>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

<FontAwesomeIcon icon="fa-solid fa-arrow-down"  className="icon" />
                  <p>Pastor Segun Oduyebo is the Lead Pastor and Founder of Great House Christian Centre, where he lives out his ultimate passion of helping people discover and walk boldly in purpose. Under his leadership, Great House Christian Centre has planted 4 centres in Nigeria. His achievements within Great House Christian Centre include but are not limited to:</p>
                 <ul>

                   <li>Developed and implemented the church organizational structure, ensuring effective and seamless operations. </li>
                  <li>He has led a vibrant and efficient volunteer workforce in the purpose of achieving the set goals of the organization.</li>
                  <li>He has developed a compendium of valuable resources to be used in the training and development of both pastors and congregants.</li>
                 </ul>
                 <h5>He is married to Adeola Oduyebo, his partner in life and purpose and their marriage is blessed with three children</h5>
                  {/* <TrackVisibility>
                  <Button
                    variant="outline-light"
                    className={`ab-button ${activeLink === 'ab' ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink('/ab');
                      navigate('/ab');
                    }}
                  > <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                  </Button>
                  </TrackVisibility> */}
                </div>}
            </TrackVisibility>
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
