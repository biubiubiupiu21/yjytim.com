import '../css/Home.css';
import '../css/style.css';
import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion";

//MUI
import Container from '@mui/material/Container';


// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

// profileImage
import profileImage from '../image/profileImage1.png'

import { githubUrl, youtubeUrl, insUrl, linkedInUrl } from './../constantsLink.js';


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

export default function HomeAboutMe() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Container
        maxWidth="md"
        className="profileContainer d-flex justify-content-center align-items-center"
      >
        <motion.div variants={containerVariants}>
          <h2 className="text-center">About Me</h2>
          <Row>
            <Col xs={12} md={6}>
              <motion.img
                alt="Profile"
                src={profileImage}
                className="profileImage"
                variants={imageVariants}
              />
              <div className="text-center icon-list">
                <a
                  className="socialMLog linkHover3"
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="socialMLogo fa-xl icon"
                  />
                </a>
                <a
                  className="socialMLog linkHover3"
                  href={insUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="socialMLogo fa-xl icon"
                  />
                </a>
                <a
                  className="socialMLog linkHover3"
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="socialMLogo fa-xl icon"
                  />
                </a>
                <a
                  className="socialMLog linkHover3"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="socialMLogo fa-xl icon"
                  />
                </a>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center mt-3"
            >
              <motion.div variants={containerVariants}>
                <p className="text-left" style={{ lineHeight: 2 }}>
                  I am Junyu (Tim) Yao, a computer engineer with a Master's from
                  NYU Tandon School of Engineering and a Bachelor's from
                  Washington College. <br /><br /> My academic and professional
                  journey is rooted in leveraging technology to create impactful
                  solutions. I specialize in machine learning, network security,
                  and full-stack development, with proficiency in <u>Python</u>,
                  <u>Java</u>, <u>JavaScript</u>, <u>React</u>,
                  <u>SQL</u>, and more
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @My Github Page
                  </a>. <br /><br /> With experience in web development and
                  project leadership, I'm passionate about driving innovation in
                  the digital space. This website is a window into my projects,
                  experiences, and thoughts on how technology shapes our
                  world. Let's connect and explore opportunities for
                  collaboration.
                </p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.div>
  );
}
