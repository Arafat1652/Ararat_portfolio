import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiAdobephotoshop ,
  SiAdobeillustrator
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>VS Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgFigma />
      <h4>Figma</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
      <h4>Photoshop</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeillustrator />
      <h4>Illustrator</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
