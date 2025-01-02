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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeillustrator />
      </Col>
    </Row>
  );
}

export default Toolstack;
