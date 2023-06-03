import React from "react";
import { Poster, TechStackStyles } from "./TechStackStyles";
import { FcComboChart } from "react-icons/fc";
import {
  SiJsonwebtokens,
  SiPython,
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiAzuredevops,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion/dist/framer-motion";
import useAnimate from "../Projects/Hooks/useAnimate";
import ginIcon from "../Assets/go.png"
import goIcon from "../Assets/Go-Logo.png"
import gormIcon from "../Assets/gorm.png"

const TechStack = () => {
  const { ref, animation } = useAnimate();
  return (
    <TechStackStyles>
      <motion.div ref={ref} animate={animation} className="skills" id="skills">
        <h1>My Skill Set</h1>
        <div className="position">
          <div className="head">
            <h2>Front-End Technologies</h2>
          </div>
          <div className="list">
            <div className="skill">
              <GrReactjs color="#0388fc" fontSize={29} />
              <span>React</span>
            </div>
            <div className="skill">
              <SiRedux color="purple" fontSize={29} />
              <span>Redux</span>
            </div>
            <div className="skill">
              <SiTailwindcss color="#41a2ab" fontSize={29} />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill">
              <SiTypescript color="#0388fc" fontSize={29} />
              <span>TypeScript</span>
            </div>
            <div className="skill">
              <SiJavascript color="yellow" fontSize={29} />
              <span>Javascript</span>
            </div>
            <div className="skill">
              <AiOutlineHtml5 color="orange" fontSize={29} />
              <span>HTML</span>
            </div>
            <div className="skill">
              <IoLogoCss3 color="#0388fc" fontSize={29} />
              <span>CSS</span>
            </div>
            <div className="skill">
              <FcComboChart fontSize={29} />
              <span>Chart-js</span>
            </div>
            <div className="skill">
              <SiStyledcomponents color="yellow" fontSize={29} />
              <span>Styled Components</span>
            </div>
          </div>
        </div>
        <div className="position">
          <div className="head">
            <h2>Back-End Technologies</h2>
          </div>
          <div className="list">
            <div className="skill">
              <Poster src={goIcon} alt="go-icon" />
              <span>Golang</span>
            </div>
            <div className="skill">
              <Poster src={ginIcon} alt="gin-icon"/>
              <span>Gin Framework</span>
            </div>
            <div className="skill">
              <Poster src={gormIcon} alt="gin-icon"/>
              <span>Gorm</span>
            </div>
            <div className="skill">
              <SiJsonwebtokens color="aliceblue" fontSize={26} />
              <span>JsonWeb-Token</span>
            </div>
            <div className="skill">
              <SiPostgresql color="aliceblue" fontSize={29} />
              <span>PostgreSQL</span>
            </div>
            <div className="skill">
              <TbApi color="#0303a6" fontSize={29} />
              <span>RestfulAPI</span>
            </div>
            <div className="skill">
              <SiPython color="#0303a6" fontSize={29} />
              <span>Python</span>
            </div>
          </div>
        </div>
        <div className="position">
          <div className="position">
            <div className="head">
              <h2>Tools</h2>
            </div>
            <div className="list">
              <div className="skill">
                <FaGitAlt color="#f56905" fontSize={29} />
                <span>Git</span>
              </div>
              <div className="skill">
                <FaGithub color="black" fontSize={29} />
                <span>GitHub Actions</span>
              </div>
              <div className="skill">
                <FaNpm color="#f52c39" fontSize={29} />
                <span>NPM</span>
              </div>
              <div className="skill">
                <VscCode color="#0303a6" fontSize={29} />
                <span>VScode</span>
              </div>
              <div className="skill">
                <SiAzuredevops color="blue" fontSize={29} />
                <span>VScode</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </TechStackStyles>
  );
};

export default TechStack;
