import React from 'react'
import {GrReactjs} from 'react-icons/gr'
import {CgWebsite} from 'react-icons/cg'
import {BsCodeSlash} from 'react-icons/bs'
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io5'
import {SiJavascript, SiStyledcomponents, SiMapbox} from 'react-icons/si'
import maps from '../../Assets/maps.png'
import { motion } from 'framer-motion/dist/framer-motion'
import { ProjectStyles } from '../ProjectStyles'
import useAnimate from '../Hooks/useAnimate'

const Map = () => {
  const{ref,animation} = useAnimate()
    return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation}  className="project">
        <div className="name">
          5.  Map App
        </div>
        <div className="wrapper">
          <div className="info">
            <div className="description">
              <span className='sub-head'>App Description:</span>
              <p>
              This application allows you to find directions and distance using different types of maps on any location around the globe.
              </p>
            </div>
            <div  className="techstack" >
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id"><GrReactjs color='#0388fc' fontSize={26}/> <span>React</span></div>
                
                <div className="tech-id"><SiStyledcomponents color='yellow' fontSize={26}/><span>Styled Components</span></div>
                <div className="tech-id"><SiMapbox color='aliceblue' fontSize={26}/><span>Map box API</span></div>
                
              </div>
            </div>
            
            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id"><AiOutlineHtml5 color='orange' fontSize={26}/><span>Html</span></div>
                <div className="lang-id"><IoLogoCss3 color='#0388fc' fontSize={26}/><span>CSS</span></div>
                <div className="lang-id"><SiJavascript color='yellow' fontSize={26}/><span>Javascript</span></div>
                
              </div>
            </div>
            
            <div className="links">
              <a href="https://github.com/mk870/React_Map_App" target="_blank" rel='noreferrer'>
                <div className="btn"><BsCodeSlash color='red' fontSize={19}/><span>Source Code</span></div>
              </a>
              <a href="https://nextgenmaps.netlify.app" target="_blank" rel='noreferrer'>
                <div className='btn'><CgWebsite color='red' fontSize={19}/><span>Live Site</span></div>
              </a>
              
            </div>
          </div>
          <div className="image">
            <img className='mappic' src={maps} alt="map-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
    
  )
}

export default Map