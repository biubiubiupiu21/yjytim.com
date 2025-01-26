
import '../css/Home.css';
import '../css/style.css';
import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

//MUI
import Container from '@mui/material/Container';

import ProgrammerContent from '../components/homeProgrammer.js'
import PhotographerContent from '../components/homeCreator.js'
import AboutMe from '../components/homeAboutMe.js'


const ResponsiveText = styled.p`
  font-size: 66px;

  @media (max-width: 1200px) {
    font-size: 66px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

function Home() {
  return (
    <div className="PoppinsFont">

      <motion.div
        className="d-flex justify-content-center align-items-center backgroundcolor1 firstContainer text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container maxWidth="md">
          <motion.div variants={textVariants}>
            <ResponsiveText className="SacramentoFont miamiBlue title font-weight-bold">
              Hi, I'm Tim Yao
            </ResponsiveText>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut", delay: 1.7 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <Row className="align-items-center">
              <Col xs={10} className="pr-2 text-end"> {/* Adjust the padding for the text */}
                <p className="mb-0">
                  A M.S. Computer Engineering Student, Programmer and Content-Creator
                </p>
              </Col>
              <Col xs={2} className="pl-0 text-start"> {/* Remove left padding for the animation */}
                <DotLottieReact
                  src="https://lottie.host/e2a2e38f-51d5-4d6f-a8cf-dc9c3fd6580f/noDFQxHo7l.lottie"
                  loop
                  autoplay
                  style={{
                    width: "50px", // Adjust size to fit better
                    height: "50px",
                  }}
                />
              </Col>
            </Row>

          </motion.div>
        </Container>
      </motion.div>

      {/* <FixedIcon /> */}

      <Container maxWidth="md" className="profileContainer d-flex justify-content-center align-items-center">
          <AboutMe/>
      </Container>

      <div className="justify-content-center align-items-center backgroundcolor1" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <Container maxWidth="md">
          <h2 className="text-center programmerTitle">A "Rookie" Programmer</h2>
          <p className="text-center ">Always Exploring</p>
          <ProgrammerContent />
        </Container>
      </div>
      <div className='justify-content-center align-items-center' style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
        <Container maxWidth="lg">
          <h2 className="text-center creatorTitle">A "Rookie" Content Creator</h2>
          <div style={{ padding: "10%" }}>
            <PhotographerContent />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;

