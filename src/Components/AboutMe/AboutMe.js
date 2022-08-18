import React from 'react'
import useAnimate from '../Projects/Hooks/useAnimate'
import { motion } from 'framer-motion/dist/framer-motion'
import { AboutMeStyles } from './AboutMeStyles'
import svg from '../Assets/coder.png'
import svg4 from '../Assets/coder4.png'
import svg2 from '../Assets/coder2.png'
import svg3 from '../Assets/coder3.png'
import svg5 from '../Assets/coder5.png'

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
          <p>The first time I saw a SpaceX rocket land on its own and subsequently stumbling across Lex fridman's podcast on youtube back in 2020, my inner tech geek was instantly aroused. <br /> So I decided to get into technology while working at another job. <br />Using udemy courses, documentation, youtube and the almighty stackoverflow, I dived into machine learning, then after getting a google certificate in data analytics, I proceeded to web development . <br /> I've got to say, the ability to create sites and algorithms has been one of the most interesting and jaw dropping experiences of my life. Cheers to building more, hopefully with you!!!</p>
        </div>
        
        </div>
        
      </motion.div>
      
    </AboutMeStyles>
  )
}

export default AboutMe