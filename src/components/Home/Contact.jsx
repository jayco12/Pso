import { useState } from "react";
import { Container, Row, Col,Button  } from "react-bootstrap";
import 'animate.css';
import gmail from "../../assets/gmail.svg"
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';
export const Contact = () => {
  const [activeLink, setActiveLink] = useState('/');
    const navigate = useNavigate();
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="contactcard"> 
              <img src={gmail} alt="Contact Us"/>
              <h1>Odusegun05@gmail.com</h1>
              <div className="green"></div>
              </div>
               
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ? 
                "animate__animated animate__fadeIn" 
                : ""
                }>
                <h2>Join our mailing list</h2>
               <h5>We promise not to SPAM you, but send you edifying and amazing content regularly from Pastor Segun Oduyebo.</h5>
               <Button
              variant="outline-light"
              className={`waitlist-button ${activeLink === 'waitlist' ? 'active' : ''}`}
              onClick={() => {
                setActiveLink('/waitlist');
                navigate('/waitlist');
              }}
            >
              Join Now
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