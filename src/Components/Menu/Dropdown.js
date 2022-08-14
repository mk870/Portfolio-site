import React from 'react'
import { DropdownStyles } from './DropdownStyles'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {IoDocumentText} from 'react-icons/io5'

const Dropdown = () => {
  return (
    <DropdownStyles>
      <div className="details-drop">
        <div className="linkedIn">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <ImLinkedin fontSize={29} color={'blue'}/>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="github">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <BsGithub fontSize={29} color={'white'}/>
            <span>Github</span>
          </a>
        </div>
        <div className="resume">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <IoDocumentText fontSize={29} color={'white'}/>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </DropdownStyles>
  )
}

export default Dropdown