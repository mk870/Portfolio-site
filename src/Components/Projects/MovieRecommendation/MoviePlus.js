import React from 'react'
import {GrReactjs,GrMysql} from 'react-icons/gr'
import {CgWebsite} from 'react-icons/cg'
import {BsCodeSlash } from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {BiMoviePlay} from 'react-icons/bi'
import {SiSpringboot,SiJsonwebtokens,SiFlask,SiJupyter,SiPandas,SiScikitlearn,SiPython, SiJavascript, SiJava, SiStyledcomponents, SiNumpy, SiHibernate} from 'react-icons/si'
import {IoCloudCircleOutline} from 'react-icons/io5'
import movieapp from '../../Assets/movie.png'
import { motion } from 'framer-motion/dist/framer-motion'
import { ProjectStyles } from '../ProjectStyles'
import useAnimate from '../Hooks/useAnimate'
import { imageSize } from '../Utilis'

const MoviePlus = () => {
  const{ref,animation} = useAnimate()
    return (
    <ProjectStyles >
      <motion.div ref={ref} animate={animation}  className="project">
        <div className="name">
          1.  Movie Recommendation App
        </div>
        <div className="wrapper">
          
          <div className="info">
          <div className="description">
              
              <span className='sub-head'>App Description:</span>
              <p>
                This app allows you to search for your favourite movies from a library with over 6000 movies, It has a custom built ML recommendation engine which recommends movies based on content type e.g genre, director and actors <span>(content based recommendation engine using the Sigmoid algorithm )</span>.
              <br />
              The app also allows you to add and delete your favourite movies and actors in your own account.
              <br />
              It also allows you to watch movie trailers and reviews through the youtube api.
              <br />
              Finally, it has a live twitter-sentiment score for each movie using Natural Languange Processing <span>( Support Vector Machine Algorithm)</span> , in addition you also get to see what people are currently saying about your movie through wordcloud.
              </p>
            </div>
            <div  className="techstack" >
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id"><GrReactjs color='#0388fc' fontSize={26}/> <span>React</span></div>
                <div className="tech-id"><AiFillYoutube color='red' fontSize={26}/><span>Youtube API</span></div>
                <div className="tech-id"><SiStyledcomponents color='yellow' fontSize={26}/><span>Styled Components</span></div>
                <div className="tech-id"><SiSpringboot color='green' fontSize={26}/><span>Spring-boot App</span></div>
                <div className="tech-id">
                  <SiHibernate color='#fce3a9' fontSize={26}/>
                  <span>Hibernate</span>
                </div>
                <div className="tech-id"><SiJsonwebtokens color='aliceblue' fontSize={26}/><span>JsonWeb-Token</span></div>
                <div className="tech-id"><SiFlask color='aliceblue' fontSize={26}/><span>Flask</span></div>
                <div className="tech-id"><SiJupyter color='orange' fontSize={26}/><span>Jupyter-Notebook</span></div>
                <div className="tech-id"><SiPandas color='#0303a6' fontSize={26}/><span>Pandas</span></div>
                <div className="tech-id"><SiScikitlearn color='orange' fontSize={26}/><span>Scikit-Learn</span></div>
                <div className="tech-id"><SiNumpy color='#0471bf' fontSize={26}/><span>Numpy</span></div>
                <div className="tech-id"><GrMysql color='aliceblue' fontSize={26}/><span>MySQL Database</span></div>
                <div className="tech-id"><IoCloudCircleOutline color='purple' fontSize={26}/><span> Word Cloud</span></div>
                <div className="tech-id"><FaTwitter color='#0388fc' fontSize={26}/><span> Twitter API</span></div>
                <div className="tech-id"><BiMoviePlay color='aliceblue' fontSize={26}/><span> TMDB API</span></div>
              </div>
            </div>
            
            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id"><SiPython color='#2b4eed' fontSize={26}/><span>Python</span></div>
                <div className="lang-id"><SiJavascript color='yellow' fontSize={26}/><span>Javascript</span></div>
                <div className="lang-id"><SiJava color='aliceblue' fontSize={26}/><span>Java</span></div>
                <div className="lang-id"><GrMysql color='aliceblue' fontSize={26}/><span>SQL</span></div>
              </div>
            </div>
            
            <div className="links">
              <a href="https://github.com/mk870/react-movieplus" target="_blank" rel='noreferrer'>
                <div className="btn"><BsCodeSlash color='red' fontSize={19}/><span>Source Code</span></div>
              </a>
              <a href="https://react-movieplus.netlify.app" target="_blank" rel='noreferrer'>
                <div className='btn'><CgWebsite color='red' fontSize={19}/><span>Live Site</span></div>
              </a>
              
            </div>
          </div>
          <div className="image">
            <img className='moviepic'  src={movieapp} alt="movie-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
    
  )
}

export default MoviePlus