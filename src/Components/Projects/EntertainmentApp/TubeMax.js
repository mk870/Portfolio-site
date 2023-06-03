import React from "react";
import { GrReactjs } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import {
  SiJsonwebtokens,
  SiJavascript,
  SiStyledcomponents,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
import movieapp from "../../Assets/home.png";
import { motion } from "framer-motion/dist/framer-motion";
import { ProjectStyles } from "../ProjectStyles";
import useAnimate from "../Hooks/useAnimate";
import ginIcon from "../../Assets/go.png"
import goIcon from "../../Assets/Go-Logo.png"
import gormIcon from "../../Assets/gorm.png"
import { Poster } from "../../TechStack/TechStackStyles";
import * as styled from './TubeMaxStyles'

const TubeMax = () => {
  const { ref, animation } = useAnimate();
  return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation} className="project">
        <div className="name">2. Entertainment App</div>
        <div className="wrapper">
          <div className="info">
            <div className="description">
              <span className="sub-head">App Description:</span>
              <p>
                This app allows you to search for your favourite movies, tvShows and music from spotify and TMDB.
                <br />
                The app also allows you to add and delete your favourite movies, tvShows, songs, albums, artists and actors in your own account.
                <br />
                It also allows you to watch movie, tvShow trailers, music videos and reviews through
                the youtube api.
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
                  <AiFillYoutube color="red" fontSize={26} />
                  <span>Youtube API</span>
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
                <div className="tech-id">
                  <FaSpotify color="green" fontSize={26} />
                  <span> Spotify API</span>
                </div>
                <div className="tech-id">
                  <BiMoviePlay color="aliceblue" fontSize={26} />
                  <span> TMDB API</span>
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
                href="https://github.com/mk870/EntertainmentApp-Ui"
                target="_blank"
                rel="noreferrer"
              >
                <div className="btn">
                  <BsCodeSlash color="red" fontSize={19} />
                  <span>Source Code</span>
                </div>
              </a>
              <a
                href="https://tube-max.vercel.app/"
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
            <styled.poster src={movieapp} alt="movie-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
  );
};

export default TubeMax;
