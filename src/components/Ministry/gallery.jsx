import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import headerImg1 from "../../assets/worship.jpg";
import headerImg2 from "../../assets/worship1.jpg";
import headerImg3 from "../../assets/cong1.jpg";
import headerImg4 from "../../assets/worship2.jpg";
import headerImg5 from "../../assets/cong3.jpg";
import headerImg6 from "../../assets/worshipp.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Gallery = () => {
    const [activeLink, setActiveLink] = useState('/');
    const navigate = useNavigate();

  return (
    <section className="gallery" id="gallery">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                   "animate__animated animate__fadeIn"
                    : ""
                    }>
                  <img src={headerImg1} alt="Header Img" />
                </div>
                
                }
                
            </TrackVisibility>
           
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
               <img src={headerImg2} alt="Header Img" />
               </div>
                }
                
            </TrackVisibility>
           
          </Col>
        </Row>
        <br/><br/><br/>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                   "animate__animated animate__fadeIn"
                    : ""
                    }>
                  <img src={headerImg3} alt="Header Img" />
                </div>
                
                }
                
            </TrackVisibility>
           
          </Col>
         
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
               <img src={headerImg4} alt="Header Img" />
               </div>
                }
                
            </TrackVisibility>
           
          </Col>
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                   "animate__animated animate__fadeIn"
                    : ""
                    }>
                  <img src={headerImg5} alt="Header Img" />
                </div>
                
                }
                
            </TrackVisibility>
           
          </Col>
          <Col xs={12} md={6} xl={3}>
            <TrackVisibility>
              {({ isVisible }) =>
               <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
               <img src={headerImg6} alt="Header Img" />
               </div>
                }
                
            </TrackVisibility>
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}