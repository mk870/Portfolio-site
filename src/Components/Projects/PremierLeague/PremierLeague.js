import React from 'react'
import {GiOctopus} from 'react-icons/gi'
import {CgWebsite} from 'react-icons/cg'
import {BsCodeSlash} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io5'
import {SiJavascript, SiFlask, SiNumpy, SiPython,SiJupyter,SiPandas,SiScikitlearn} from 'react-icons/si'
import epl from '../../Assets/epl.png'
import { motion } from 'framer-motion/dist/framer-motion'
import { ProjectStyles } from '../ProjectStyles'
import useAnimate from '../Hooks/useAnimate'

const PremierLeague = () => {
  const{ref,animation} = useAnimate()
    return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation}  className="project">
        <div className="name">
          6.  Premier League Wage Prediction App
        </div>
        <div className="wrapper">
          <div className="info">
            <div className="description">
            <span className='sub-head'>App Description:</span>
              <p>
                This app allows you to predict an English Premier League player's weekly wages based on their physical, contractual and perfomance attributes. ( based on the 2020/21 season ) 
                <br />
                The app uses Machine Learning for this task <span>( XGBoost Algorithm )</span>. 
              </p>
            </div>
            <div  className="techstack" >
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id"><SiJavascript color='yellow' fontSize={26}/> <span>Vanilla js</span></div>
                
                <div className="tech-id"><SiFlask color='aliceblue' fontSize={26}/><span>Flask</span></div>
                
                <div className="tech-id"><SiJupyter color='orange' fontSize={26}/><span>Jupyter-Notebook</span></div>
                <div className="tech-id"><SiPandas color='#0303a6' fontSize={26}/><span>Pandas</span></div>
                <div className="tech-id"><SiScikitlearn color='orange' fontSize={26}/><span>Scikit-Learn</span></div>
                <div className="tech-id"><SiNumpy color='#0471bf' fontSize={26}/><span>Numpy</span></div>
                <div className="tech-id"><GiOctopus color='#0471bf' fontSize={26}/><span>Octoparse 8</span></div>
              </div>
            </div>
            
            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id"><AiOutlineHtml5 color='orange' fontSize={26}/><span>Html</span></div>
                <div className="lang-id"><IoLogoCss3 color='#0388fc' fontSize={26}/><span>CSS</span></div>
                <div className="lang-id"><SiJavascript color='yellow' fontSize={26}/><span>Javascript</span></div>
                <div className="lang-id"><SiPython color='#2b4eed' fontSize={26}/><span>Python</span></div>
              </div>
            </div>
            
            <div className="links">
              <a href="https://github.com/mk870/EnglishPremierLeague_wage_estimator" target="_blank" rel='noreferrer'>
                <div className="btn"><BsCodeSlash color='red' fontSize={19}/><span>Source Code</span></div>
              </a>
              <a href="https://epl-wage-estimator.herokuapp.com" target="_blank" rel='noreferrer'>
                <div className='btn'><CgWebsite color='red' fontSize={19}/><span>Live Site</span></div>
              </a>
              
            </div>
          </div>
          <div className="image">
            <img className='eplpic' src={epl} alt="epl-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
    
  )
}

export default PremierLeague