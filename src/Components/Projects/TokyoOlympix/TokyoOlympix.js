import React from 'react'
import useAnimate from '../Hooks/useAnimate'
import { ProjectStyles } from '../ProjectStyles'
import {GrMysql} from 'react-icons/gr'
import {CgWebsite} from 'react-icons/cg'
import {BsCodeSlash } from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {SiSpringboot,SiJsonwebtokens,SiTableau,SiJavascript, SiJava, SiApollographql, SiHibernate,SiNextdotjs,SiGraphql} from 'react-icons/si'
import tokyoapp from '../../Assets/Tokyo.png'
import { motion } from 'framer-motion/dist/framer-motion'

const TokyoOlympix = () => {
  const{ref,animation} = useAnimate()
  return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation}  className="project">
        <div className="name">
          3.  Tokyo 2021 Olympics App
        </div>
        <div className="wrapper">
          
          <div className="info">
          <div className="description">
              
              <span className='sub-head'>App Description:</span>
              <p>
                This app shows a comprehensive statistical analysis and data visualizations of the tokyo olympics, from athletes to medals won per country through the Tableau API. <span>
                  (<a href="https://public.tableau.com/app/profile/mkhululi.ndlovu6019#!/?newProfile=&activeTab=0" target="_blank" rel='noreferrer'>My Public Tableau Dashboard link</a>)
                </span>
              <br />
              The app also allows you to watch major events across 6 disciplines through the youtube API.
              <br />
              Additionally it allows registered users to add, edit and delete comments and likes/dislikes on these videos using apollo client and graphQL.
              <br />
              <span>NOTE:</span>  the tableau API takes time to load so please be patient on the Dataviz page.
              </p>
            </div>
            <div  className="techstack" >
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id"><SiNextdotjs color='white' fontSize={26}/><span>Nextjs</span></div>
                <div className="tech-id"><SiApollographql color='aliceblue' fontSize={26}/><span>Apollo GraphQL</span></div>
                <div className="tech-id"><SiGraphql color='#fc03d7' fontSize={26}/><span>Spring GraphQL</span></div>
                <div className="tech-id"><SiTableau color='#fa7602' fontSize={26}/><span>Tableau</span></div>
                <div className="tech-id"><AiFillYoutube color='red' fontSize={26}/><span>Youtube API</span></div>
                <div className="tech-id"><SiSpringboot color='green' fontSize={26}/><span>Spring-boot App</span></div>
                <div className="tech-id">
                  <SiHibernate color='#fce3a9' fontSize={26}/>
                  <span>Hibernate</span>
                </div>
                <div className="tech-id"><SiJsonwebtokens color='aliceblue' fontSize={26}/><span>JsonWeb-Token</span></div>
                <div className="tech-id"><GrMysql color='aliceblue' fontSize={26}/><span>MySQL Database</span></div>
                
              </div>
            </div>
            
            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id"><SiJavascript color='yellow' fontSize={26}/><span>Javascript</span></div>
                <div className="lang-id"><SiJava color='aliceblue' fontSize={26}/><span>Java</span></div>
                <div className="lang-id"><SiGraphql color='#fc03d7' fontSize={26}/><span>GraphQL</span></div>
                <div className="lang-id"><GrMysql color='aliceblue' fontSize={26}/><span>SQL</span></div>
              </div>
            </div>
            
            <div className="links">
              <a href="https://github.com/mk870/TokyoOlympix" target="_blank" rel='noreferrer'>
                <div className="btn"><BsCodeSlash color='red' fontSize={19}/><span>Source Code</span></div>
              </a>
              <a href="https://tokyo-olympix.vercel.app" target="_blank" rel='noreferrer'>
                <div className='btn'><CgWebsite color='red' fontSize={19}/><span>Live Site</span></div>
              </a>
              
            </div>
          </div>
          <div className="image">
            <img className='moviepic'  src={tokyoapp} alt="movie-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
  )
}

export default TokyoOlympix