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
          Here are a few projects I manage.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="WorkByte"
              description="A web-based React application where users can sign up, and and rate rentable office-spaces! Using Google's Map API, users can input the actual location of the office. As a developer, I'm often traveling and searching for a good work environment. This application helps coders around the world."
              link=""
              linktwo="https://github.com/NPraglin/symmetrical-funicular"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://picsum.photos/250'}
              isBlog={false}
              title="Lorem Picsum Clone"
              description="Developed as a project for a coding bootcamp, my random photo generator actually became quite useful. My web-app utilizes Lorem Ipsum's random photo generator. Enter your desired height/width into the input parameters and a random photo will be generated. Great for testing blogs, user profiles, or anything that needs placeholder images."
              link=""
              linktwo="https://github.com/NPraglin/lorem-picsum-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog_pic}
              isBlog={true}
              title="Chess Blog"
              description="A web-based Python/Django blog I developed to practice deploying an application. Fully functional user registration, login, and posting. I'm a passionate Chess player, feel free to sign up and post some information! Or send me a game request on Chess.com, my username is NPraglin."
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
