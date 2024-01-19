import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/ddi/ddi1.JPG";
import projImg2 from "../../assets/ddi/ddi2.JPG";
import projImg3 from "../../assets/ddi/ddi3.JPG";
import projImg4 from "../../assets/ddi/ddi4.JPG";
import projImg5 from "../../assets/ddi/ddi5.JPG";
import projImg6 from "../../assets/ddi/tr1.JPG";
import projImg7 from "../../assets/ddi/tr2.JPG";
import projImg8 from "../../assets/ddi/tr3.JPG";
import projImg9 from "../../assets/ddi/tr6.JPG";
import projImg0 from "../../assets/ddi/tr7.JPG";
import projImg11 from "../../assets/ddi/tr8.JPG";
import projImg12 from "../../assets/ddi/tr9.JPG";
import projImg13 from "../../assets/ddi/tr10.JPG";
import projImg14 from "../../assets/ddi/tr4.JPG";
import projImg15 from "../../assets/ddi/tr5.JPG";
import projImg16 from "../../assets/ddi/dd7.JPG";
import projImg17 from "../../assets/ddi/dd8.JPG";
import projImg18 from "../../assets/ddi/ddi9.JPG";
import projImg19 from "../../assets/ddi/dd1.JPG";
import projImg20 from "../../assets/ddi/dd2.JPG";
import projImg21 from "../../assets/ddi/dd3.JPG";
import colorSharp2 from "../../assets/ddi/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            imgUrl: projImg6,
        },
        {
            imgUrl: projImg7,
        },
        {
            imgUrl: projImg12,
        },
        {
            imgUrl: projImg13,
        },
        {
            imgUrl: projImg17,
        },
        {
            imgUrl: projImg18,
        },
        {
            imgUrl: projImg19,
        },
        {
            imgUrl: projImg20,
        },
        {
            imgUrl: projImg21,
        },

    ];
    const projects1 = [

        {
            imgUrl: projImg1,
        },
        {
            imgUrl: projImg2,
        },
        {
            imgUrl: projImg3,
        },
        {
            imgUrl: projImg4,
        },
        {
            imgUrl: projImg5,
        },

        {
            imgUrl: projImg16,
        },
    ];
    const projects2 = [
        {
            imgUrl: projImg8,
        },
        {
            imgUrl: projImg9,
        },
        {
            imgUrl: projImg0,
        },
        {
            imgUrl: projImg11,
        },
        {
            imgUrl: projImg14,
        },
        {
            imgUrl: projImg15,
        },

    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Pastor Segun is a prolific trainer, with a transformational leadership gift and the ability to replicate himself in his trainees. This is a skill he has developed and it is also a spiritual endowment for his Apostolic call.

He is also a thought-leader, promoting Spirituality and Christian Culture through his Youtube page Olusegun Oduyebo Live.

Besides GHCC, He also is a destiny coach.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">DDI</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Teen lead</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Trainings</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>                        </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
