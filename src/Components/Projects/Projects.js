import React from "react";

import { ProjectsStyles } from "./ProjectsStyles";
import PhotoEditor from "./PhotoEditor/PhotoEditor";
import Map from "./Map/Map";
import TubeMax from "./EntertainmentApp/TubeMax";
import REstates from "./RealEstate/REstates";

const Projects = () => {
  return (
    <ProjectsStyles id="projects">
      <div className="head">
        <h1>Projects</h1>
      </div>
      <div className="list">
        <REstates/>
        <TubeMax />
        <PhotoEditor />
        <Map />
      </div>
    </ProjectsStyles>
  );
};

export default Projects;
