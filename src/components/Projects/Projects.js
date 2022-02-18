import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Blog_pic from "../../Assets/Projects/Blog_pic.png";
import location from "../../Assets/Projects/location.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="Trav-e-Location"
              description="A web-based React application where users can sign up, and post their favorite travel spots! Using Google's Map API, users can input the actual location of where their favorite travel spot is located"
              link=""
              linktwo="https://github.com/NPraglin/symmetrical-funicular"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog_pic}
              isBlog={true}
              title="Collaborative Blog"
              description="A web-based Python/Django blog. Fully functional user registration, login, and posting. Feel free to sign up and post some inspiring knowledge, or helpful tech tips! This project emerged initally as a method to practice deploying an application. I'm glad to have turned it into an active blog!"
              link="http://nathansdjangoapp.herokuapp.com/"
              linktwo="https://github.com/NPraglin/PythonDjangoWebBlog"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
