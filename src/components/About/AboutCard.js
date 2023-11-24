import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christian Park </span>
            from <span className="purple"> Carlsbad, California.</span>
            <br />
            I am currently studying Mathematics at UC berkeley. 
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empty your cup so that it may be filled; become devoid to gain totality. "{" "}
          </p>
          <footer className="blockquote-footer">Bruce Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
