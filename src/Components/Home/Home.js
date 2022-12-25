import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactForm/ContactForm";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import { HomeStyles } from "./HomeStyles";

const Home = () => {
  return (
    <HomeStyles>
      <div className="introduction">
        <Introduction />
      </div>
      <div className="myskills">
        <TechStack />
      </div>
      <Projects />
      <div className="about">
        <AboutMe />
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </HomeStyles>
  );
};

export default Home;
