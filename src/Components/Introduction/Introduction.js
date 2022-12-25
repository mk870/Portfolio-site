import React, { useEffect } from "react";
import { IntroductionStyles } from "./IntroductionStyles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/framer-motion";
import { useAnimation } from "framer-motion/dist/framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Introduction = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 6,
          bounce: 0.6,
        },
      });
    } else {
      animation.start({
        x: -320,
      });
    }
  }, [inView]);

  return (
    <IntroductionStyles>
      <motion.div ref={ref} className="intro" animate={animation}>
        <div className="greeting">
          <div className="descr">
            Hi, I'm <span className="name-span">Mkhue.</span>
          </div>
          <div className="descr">I'm a full Stack Developer </div>
          <div className="descr">and a Data Scientist.</div>
        </div>

        <div className="info">
          <Link to={"#skills"} smooth>
            <span className="skills">Skills </span>
          </Link>
          <Link to={"#projects"} smooth>
            <span> Projects</span>
          </Link>
          <Link to={"#about"} smooth>
            <span>About</span>
          </Link>
          <Link to={"#contact"} smooth>
            <span>Contact</span>
          </Link>
        </div>
      </motion.div>
    </IntroductionStyles>
  );
};

export default Introduction;
