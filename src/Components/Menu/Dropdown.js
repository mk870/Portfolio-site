import React from 'react'
import { DropdownStyles } from './DropdownStyles'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Dropdown = () => {
  const navigate = useNavigate()
  return (
    <DropdownStyles>
      <div className="details-drop">
      
        <div className="linkedIn">
          <a href={'https://www.linkedin.com/in/mkhululi-ndlovu-28ab9b248'} target="_blank" rel='noreferrer'>
            <ImLinkedin fontSize={29} color={'aliceblue'}/>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="github">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <BsGithub fontSize={29} color={'aliceblue'}/>
            <span>Github</span>
          </a>
        </div>
        
      </div>
    </DropdownStyles>
  )
}

export default Dropdown