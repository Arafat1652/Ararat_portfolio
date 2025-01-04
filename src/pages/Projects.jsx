import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import trabela from "../assets/projects/trabela.png";
import storystack from "../assets/projects/storystack.png";
import artisan from "../assets/projects/artisan2.png";
import estate from "../assets/projects/estate.png";
import bookvibe from "../assets/projects/bookvibe.png";
import recipe from "../assets/projects/recipe.png";
import retro from "../assets/projects/retro.png";
import p_ticket from "../assets/projects/p_ticket.png";


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
              title="Artisan (Full-Stack Project)"
              description="The website features a dedicated art & craft category with detailed product displays for a focused browsing experience. Users can easily filter products by customization options—Yes, No, or All—to find exactly what they need."
              ghClient="https://github.com/Arafat1652/ARTISAN-b9a10"
              ghServer="https://github.com/Arafat1652/ARTISAN-b9a10-serverside"
              demoLink="https://art-and-craft-b10.web.app/"
            />
          </Col>
          {/* Elite Estate */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              title="EliteEstate (JavaScript website)"
              description="This is a responsive real estate website focusing on a specific property category. It includes user authentication, protected routes, dynamic estate details, and a smooth UI with Firebase integration."
              githubLink="https://github.com/Arafat1652/EliteEstate-b9a9-project"
              demoLink="https://b9a9-real-estate-aa792.web.app/"
            />
          </Col>
          {/* Book Vibe */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookvibe}
              isBlog={false}
              title="Book Vibe (JavaScript website)"
              description="This platform for book lovers, offering dynamic features such as book details, Read/Wishlist options, and a custom shape bar chart. It includes a responsive design, sorting functionality"
             githubLink="https://github.com/Arafat1652/b9a8-book-review"
              demoLink="https://book-vibe-ar-b9a8.netlify.app/"
            />
          </Col>
          {/* Recipe Calories*/}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Calories (Responsive Website)"
              description="This website for recipe enthusiasts, featuring a dynamic navbar, banner section, and recipe cards. Users can explore recipes, add them to the Want to Cook table, and track currently cooking dishes."
             githubLink="https://github.com/Arafat1652/b9a7-chefs-table"
              demoLink="http://chefs-table-ar-b9a7.surge.sh/"
            />
          </Col> */}
          {/* Retro */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retro}
              isBlog={false}
              title="Retro Foram (Responsive Website)"
              description="The website features a dedicated art & craft category with detailed product displays for a focused browsing experience. Users can easily filter products by customization options—Yes, No, or All—to find exactly what they need."
              githubLink="https://github.com/Arafat1652/b9a6-retro-forum"
              demoLink="https://retro-forum-a6-ar.netlify.app/"
            />
          </Col> */}
          {/* p-ticket */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p_ticket}
              isBlog={false}
              title="P-Ticket (Dom Website)"
              description="A simple bus ticket booking website using JavaScript and DOM. Users can book up to four tickets and apply a coupon code to get a discount on the total price."
             githubLink="https://github.com/Arafat1652/b9a5-p-ticket"
              demoLink="https://arafat1652.github.io/p-ticket-b9a5/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
