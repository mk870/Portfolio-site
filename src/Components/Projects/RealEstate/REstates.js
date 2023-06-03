import React from 'react'
import { FcComboChart } from 'react-icons/fc';
import { GrReactjs } from 'react-icons/gr';
import { SiJavascript, SiJsonwebtokens, SiPostgresql, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { motion } from "framer-motion/dist/framer-motion";
import ginIcon from "../../Assets/go.png"
import goIcon from "../../Assets/Go-Logo.png"
import gormIcon from "../../Assets/gorm.png"
import { Poster } from 'Components/TechStack/TechStackStyles';
import { BsCodeSlash } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import useAnimate from '../Hooks/useAnimate';
import { ProjectStyles } from '../ProjectStyles';
import appImage from "../../Assets/restate.png"

const REstates = () => {
  const { ref, animation } = useAnimate();
  return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation} className="project">
        <div className="name">1. Real Estate App</div>
        <div className="wrapper">
          <div className="info">
            <div className="description">
              <span className="sub-head">App Description:</span>
              <p>
                This app allows you to search for your dream home. Search for any type of property from rentals to actual purchases anywhere in the US.
                <br />
                It also allows you to search for real estate agents and their properties should you prefer properties that are served by a particular agent.
                <br />
                The app also allows you to add and delete your favourite properties and agents in your own account.
                <br />
              </p>
            </div>
            <div className="techstack">
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id">
                  <GrReactjs color="#0388fc" fontSize={26} /> <span>React</span>
                </div>
                <div className="tech-id">
                  <FcComboChart color="red" fontSize={26} />
                  <span>Apex Charts</span>
                </div>
                <div className="tech-id">
                  <SiStyledcomponents color="yellow" fontSize={26} />
                  <span>Styled Components</span>
                </div>
                <div className="tech-id">
                  <Poster src={ginIcon} alt="gin-icon"/>
                  <span>Gin</span>
                </div>
                <div className="tech-id">
                  <Poster src={gormIcon} alt="gin-icon"/>
                  <span>Gorm</span>
                </div>
                <div className="tech-id">
                  <SiJsonwebtokens color="aliceblue" fontSize={26} />
                  <span>JsonWeb-Token</span>
                </div>
                <div className="tech-id">
                  <SiPostgresql color="aliceblue" fontSize={26} />
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-id">
                  <SiRedux color="purple" fontSize={26} />
                  <span> Redux</span>
                </div>
              </div>
            </div>

            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id">
                  <SiJavascript color="yellow" fontSize={26} />
                  <span>Javascript</span>
                </div>
                <div className="lang-id">
                  <Poster src={goIcon} alt="gin-icon"/>
                  <span>Golang</span>
                </div>
                <div className="lang-id">
                  <SiPostgresql color="aliceblue" fontSize={26} />
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="links">
              <a
                href="https://github.com/mk870/React-RealEstateApp-Ui"
                target="_blank"
                rel="noreferrer"
              >
                <div className="btn">
                  <BsCodeSlash color="red" fontSize={19} />
                  <span>Source Code</span>
                </div>
              </a>
              <a
                href="https://r-estates.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="btn">
                  <CgWebsite color="red" fontSize={19} />
                  <span>Live Site</span>
                </div>
              </a>
            </div>
          </div>
          <div className="image">
            <img className="moviepic" src={appImage} alt="movie-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
  )
}

export default REstates