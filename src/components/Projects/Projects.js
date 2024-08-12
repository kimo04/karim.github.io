import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import icosnet from "../../Assets/Projects/icosnet.png";
import djendjen from "../../Assets/Projects/djendjen.png";
import nlc from "../../Assets/Projects/nlc.png";
import veille from "../../Assets/Projects/veille.png";
import fni from "../../Assets/Projects/fni.png";
import gf from "../../Assets/Projects/gf.png";

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
              imgPath={veille}
              isBlog={false}
              title="Veille Entreprise"
              demoLink="https://plateforme.veille-entreprise.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gf}
              isBlog={false}
              title="Gest Force"
              demoLink="http://41.201.130.112:62345/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlc}
              isBlog={false}
              title="Ndir La Commande"
              demoLink="https://ndirlacommande.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icosnet}
              isBlog={false}
              title="ICOSNET"
              demoLink="https://icosnet.com.dz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fni}
              isBlog={false}
              title="FNI"
              demoLink="https://fni.dz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djendjen}
              isBlog={false}
              title="Djen Djen"
              demoLink="https://djendjen-port.dz/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
