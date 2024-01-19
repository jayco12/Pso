import { Col } from "react-bootstrap";

export const ProjectCard = ({  imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
      </div>
    </Col>
  )
}
