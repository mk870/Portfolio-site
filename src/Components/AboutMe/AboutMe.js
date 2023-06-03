import React from 'react'
import useAnimate from '../Projects/Hooks/useAnimate'
import { motion } from 'framer-motion/dist/framer-motion'
import { AboutMeStyles } from './AboutMeStyles'
import svg2 from '../Assets/coder2.png'

const AboutMe = () => {
  const{ref,animation} = useAnimate()
  return (
    <AboutMeStyles id='about'>
      <motion.div ref={ref} animate={animation} className="container" >
        <h1>About Me</h1>
        <div className="grid">
          <div className="images">
          <img src={svg2} alt="svg" />
          </div>
          <div className="info">
          <p>I have always been passionate about technology since childhood. However life and circumstances dictated otherwise. <br /> So finally in 2020 during the pandemic, I decided to get into the industry while working at another job. <br />Using udemy courses, documentation, youtube and the almighty stackoverflow, I dived into data analytics, then after getting a google certificate in analytics, I proceeded to full-stack web development. <br /> I've got to say, the ability to create sites and algorithms has been one of the most interesting and jaw dropping experiences of my life. Cheers to building more, hopefully with you!!!</p>
        </div>
        
        </div>
        
      </motion.div>
      
    </AboutMeStyles>
  )
}

export default AboutMe