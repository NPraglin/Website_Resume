import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            There isn't wifi in a forest, but I guarantee you'll find a better connection.{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
