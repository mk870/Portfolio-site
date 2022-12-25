import React from "react";
import { GrReactjs } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { BsCodeSlash, BsCoin } from "react-icons/bs";
import {
  FcComboChart,
  FcNews,
  FcGoogle,
  FcVoicePresentation,
} from "react-icons/fc";
import {
  SiSpringboot,
  SiJsonwebtokens,
  SiFlask,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
  SiPython,
  SiJavascript,
  SiJava,
  SiStyledcomponents,
  SiTensorflow,
  SiRedux,
  SiNumpy,
  SiHibernate,
  SiPostgresql,
} from "react-icons/si";
import crypto from "../../Assets/crypto.png";
import { motion } from "framer-motion/dist/framer-motion";
import { ProjectStyles } from "../ProjectStyles";
import useAnimate from "../Hooks/useAnimate";

const CryptoMania = () => {
  const { ref, animation } = useAnimate();
  return (
    <ProjectStyles>
      <motion.div ref={ref} animate={animation} className="project">
        <div className="name">2. CryptoMania App</div>
        <div className="wrapper">
          <div className="info">
            <div className="description">
              <span className="sub-head">App Description:</span>
              <p>
                This app shows the stats, historical price data and predicts
                future prices of crypto-currencies using a deep learning model{" "}
                <span>( Bidirectional LSTM model )</span>.
                <br />
                The app allows you to add and delete your crypto currencies on
                your own cryptowatchlist.
                <br />
                The app also displays the latest news on crypto currencies from
                major news sources.
                <br />
                Another feature is that it has voice recognition capabilities
                for navigation, theme color change and the app can read the news
                to you using an AI voice.
                <br />
                Finally, it has market exchange and crypto currency dashboards.
              </p>
            </div>
            <div className="techstack">
              <p>Tech Used</p>
              <div className="tech-list">
                <div className="tech-id">
                  <GrReactjs color="#0388fc" fontSize={26} /> <span>React</span>
                </div>
                <div className="tech-id">
                  <FcComboChart fontSize={26} />
                  <span>Chart js</span>
                </div>
                <div className="tech-id">
                  <SiRedux color="purple" fontSize={26} />
                  <span>Redux</span>
                </div>
                <div className="tech-id">
                  <SiStyledcomponents color="yellow" fontSize={26} />
                  <span>Styled Components</span>
                </div>
                <div className="tech-id">
                  <SiSpringboot color="green" fontSize={26} />
                  <span>Spring-boot App</span>
                </div>
                <div className="tech-id">
                  <SiHibernate color="#fce3a9" fontSize={26} />
                  <span>Hibernate</span>
                </div>
                <div className="tech-id">
                  <SiJsonwebtokens color="aliceblue" fontSize={26} />
                  <span>JsonWeb-Token</span>
                </div>
                <div className="tech-id">
                  <SiFlask color="aliceblue" fontSize={26} />
                  <span>Flask</span>
                </div>
                <div className="tech-id">
                  <SiJupyter color="orange" fontSize={26} />
                  <span>Jupyter-Notebook</span>
                </div>
                <div className="tech-id">
                  <SiPandas color="#0303a6" fontSize={26} />
                  <span>Pandas</span>
                </div>
                <div className="tech-id">
                  <SiScikitlearn color="orange" fontSize={26} />
                  <span>Scikit-Learn</span>
                </div>
                <div className="tech-id">
                  <SiNumpy color="#0471bf" fontSize={26} />
                  <span>Numpy</span>
                </div>
                <div className="tech-id">
                  <SiPostgresql color="aliceblue" fontSize={26} />
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-id">
                  <FcNews fontSize={26} />
                  <span> News API</span>
                </div>
                <div className="tech-id">
                  <BsCoin color="gold" fontSize={26} />
                  <span> Coin-Ranking API</span>
                </div>
                <div className="tech-id">
                  <SiTensorflow color="orange" fontSize={26} />
                  <span> Tensorflow</span>
                </div>
                <div className="tech-id">
                  <FcGoogle fontSize={26} />
                  <span> Google Colab</span>
                </div>
                <div className="tech-id">
                  <FcVoicePresentation fontSize={26} />
                  <span> Voice Recognition</span>
                </div>
              </div>
            </div>

            <div className="language">
              <p>Languages Used</p>
              <div className="lang-list">
                <div className="lang-id">
                  <SiPython color="#2b4eed" fontSize={26} />
                  <span>Python</span>
                </div>
                <div className="lang-id">
                  <SiJavascript color="yellow" fontSize={26} />
                  <span>Javascript</span>
                </div>
                <div className="lang-id">
                  <SiJava color="aliceblue" fontSize={26} />
                  <span>Java</span>
                </div>
                <div className="lang-id">
                  <SiPostgresql color="aliceblue" fontSize={26} />
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="links">
              <a
                href="https://github.com/mk870/Crypto-Mania-React"
                target="_blank"
                rel="noreferrer"
              >
                <div className="btn">
                  <BsCodeSlash color="red" fontSize={19} />
                  <span>Source Code</span>
                </div>
              </a>
              <a
                href="https://crypto-mania-react.vercel.app"
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
            <img className="moviepic" src={crypto} alt="crypto-app" />
          </div>
        </div>
      </motion.div>
    </ProjectStyles>
  );
};

export default CryptoMania;
