import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import trabela from "../assets/projects/trabela.png";
import storystack from "../assets/projects/storystack.png";
import artisan from "../assets/projects/artisan2.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* trabela */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trabela}
              isBlog={false}
              title="Trabela (Full-Stack Project)"
              description="
Browse and book tours with ease, customize plans, and secure payments. Manage profiles, save favorites, and explore Bangladesh’s destinations, culture, and cuisine. Advanced search by books or authors included."
              ghClient="https://github.com/Arafat1652/Trabela-b9a12-clientside"
              ghServer="https://github.com/Arafat1652/Trabela-b9a12-serverside"
              demoLink="https://travel-advisor-a12.web.app/"
            />
          </Col>
          {/* storystacks */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storystack}
              isBlog={false}
              title="StoryStacks (Full-Stack Project)"
              description="Librarians have exclusive access to add, update, and delete book records, ensuring an accurate inventory. Role-based access control enhances management efficiency. Users benefit from advanced search, finding books by titles or authors with ease."
              ghClient="https://github.com/Arafat1652/StoryStacks-b9a11-clientside"
              ghServer="https://github.com/Arafat1652/StoryStacks-b9a11-serverside"
              demoLink="https://b9a11-book-library.web.app/"
            />
          </Col>
          {/* artisan */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artisan}
              isBlog={false}
              title="Artisan (Full-Stack Project)"
              description="The website features a dedicated art & craft category with detailed product displays for a focused browsing experience. Users can easily filter products by customization options—Yes, No, or All—to find exactly what they need."
              ghClient="https://github.com/Arafat1652/ARTISAN-b9a10"
              ghServer="https://github.com/Arafat1652/ARTISAN-b9a10-serverside"
              demoLink="https://art-and-craft-b10.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
