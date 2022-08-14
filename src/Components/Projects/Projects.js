import React from 'react'
import { ProjectsStyles } from './ProjectsStyles'
import MoviePlus from './MovieRecommendation/MoviePlus'
import CryptoMania from './CryptoMania/CryptoMania'
import PhotoEditor from './PhotoEditor/PhotoEditor'
import Map from './Map/Map'
import PremierLeague from './PremierLeague/PremierLeague'
import TokyoOlympix from './TokyoOlympix/TokyoOlympix'

const Projects = () => {
  
  return (
    <ProjectsStyles id='projects'>
      <div className="head">
        <h1>Projects</h1>
      </div>
      <div className="list">
        <MoviePlus/>
        <CryptoMania/>
        <TokyoOlympix/>
        <PhotoEditor/>
        <Map/>
        <PremierLeague/>
      </div>
    </ProjectsStyles>
  )
}

export default Projects