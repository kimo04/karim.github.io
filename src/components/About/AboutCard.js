import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karim Khellaf </span>
            from <span className="purple"> Ottawa, Canada.</span>
            <br />
            Creative Full Stack developer with extensive experience in developing and maintaining web applications with an objective of leveraging my skills and knowledge to contribute to the success of a dynamic organization.
            <br />
            Passionate about building user-friendly and responsive websites and proficient in a range of programming languages, including HTML, CSS, JavaScript, and PHP.
            <br />
            <br />
            Highly adaptable and have a proven track record of delivering quality projects within tight deadlines.
          </p>
     

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
