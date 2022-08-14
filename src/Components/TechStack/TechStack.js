import React from 'react'
import { TechStackStyles } from './TechStackStyles'
import {FcComboChart, FcGoogle} from 'react-icons/fc'
import {SiSpringboot,SiJsonwebtokens,SiFlask,SiJupyter,SiPandas,SiScikitlearn,SiPython, SiJavascript, SiJava, SiStyledcomponents, SiTensorflow, SiRedux, SiNumpy,SiNextdotjs, SiApollographql, SiHibernate, SiGraphql, SiTableau} from 'react-icons/si'
import {GrReactjs,GrMysql} from 'react-icons/gr'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io5'
import {TbApi} from 'react-icons/tb'
import {FaGitAlt, FaGithub, FaNpm} from 'react-icons/fa'
import {VscCode} from 'react-icons/vsc'
import { motion } from 'framer-motion/dist/framer-motion'
import useAnimate from '../Projects/Hooks/useAnimate'

const TechStack = () => {
  const{ref,animation} = useAnimate()
  return (
    <TechStackStyles>
      <motion.div ref={ref} animate={animation}  className="skills" id="skills">
        <h1>My Skill Set</h1>
        <div className="position">
          <div className="head">
            <h2>Front-End Technologies</h2> 
          </div>
          <div className="list">
          <div className="skill">
            <GrReactjs color='#0388fc' fontSize={29}/>
            <span>React</span>
          </div>
          <div className="skill">
            <SiNextdotjs color='aliceblue' fontSize={29}/>
            <span>Nextjs</span>
          </div>
          <div className="skill">
            <SiRedux color='purple' fontSize={29}/>
            <span>Redux</span>
          </div>
          <div className="skill">
            <SiJavascript color='yellow' fontSize={29}/>
            <span>Javascript</span>
          </div>
          <div className="skill">
            <AiOutlineHtml5 color='orange' fontSize={29}/>
            <span>HTML</span>
          </div>
          <div className="skill">
            <IoLogoCss3 color='#0388fc' fontSize={29}/>
            <span>CSS</span>
          </div>
          <div className="skill">
            <SiApollographql color='black' fontSize={29}/>
            <span>Apollo Client</span>
          </div>
          <div className="skill">
            <FcComboChart  fontSize={29}/>
            <span>Chart-js</span>
          </div>
          <div className="skill">
            <SiStyledcomponents color='yellow' fontSize={29}/>
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
              <SiJava color='aliceblue' fontSize={29}/>
              <span>Java</span>
            </div>
            <div className="skill">
              <SiSpringboot color='green' fontSize={29}/>
              <span>Springboot</span>
            </div>
            <div className="skill">
              <SiHibernate color='#fce3a9' fontSize={29}/>
              <span>Hibernate</span>
            </div>
            <div className="skill">
              <SiJsonwebtokens color='aliceblue' fontSize={26}/>
              <span>JsonWeb-Token</span>
            </div>
            <div className="skill">
              <GrMysql color='aliceblue' fontSize={29}/>
              <span>MySQL</span>
            </div>
            <div className="skill">
              <SiGraphql color='#fa0af2' fontSize={29}/>
              <span>GraphQL</span>
            </div>
            <div className="skill">
              <TbApi color='#0303a6' fontSize={29}/>
              <span>RestfulAPI</span>
            </div>
            <div className="skill">
              <SiFlask color='aliceblue' fontSize={29}/>
              <span>Flask</span>
            </div>
            <div className="skill">
              <SiPython color='#0303a6' fontSize={29}/>
              <span>Python</span>
            </div>
          </div>
        </div>
        <div className="position">
          <div className="head">
            <h2>Machine Learning Technologies</h2>
          </div>
          <div className="list">
            <div className="skill">
              <SiNumpy color='#0303a6' fontSize={29}/>
              <span>Numpy</span>
            </div>
            <div className="skill">
              <SiScikitlearn color='orange' fontSize={29}/>
              <span>Scikit-Learn</span>
            </div>
            <div className="skill">
              <SiTensorflow color='orange' fontSize={29}/>
              <span>Tensorflow</span>
            </div>
            <div className="skill">
              <SiPandas color='#0303a6' fontSize={29}/>
              <span>Pandas</span>
            </div>
            <div className="skill">
              <FcGoogle  fontSize={29}/>
              <span>Google Colab</span>
            </div>
            <div className="skill">
              <SiJupyter color='orange' fontSize={29}/>
              <span>Jupyter Notebook</span>
            </div>
            <div className="skill">
              <SiTableau color='#060238' fontSize={29}/>
              <span>Tableau</span>
            </div>
        </div>
        <div className="position">
          <div className="head">
            <h2>Tools</h2>
          </div>
          <div className="list">
            <div className="skill">
              <FaGitAlt color='#f56905' fontSize={29}/>
              <span>Git</span>
            </div>
            <div className="skill">
              <FaGithub color='black' fontSize={29}/>
              <span>GitHub Actions</span>
            </div>
            <div className="skill">
              <FaNpm color='#f52c39' fontSize={29}/>
              <span>NPM</span>
            </div>
            <div className="skill">
              <VscCode color='#0303a6' fontSize={29}/>
              <span>VScode</span>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </TechStackStyles>
  )
}

export default TechStack