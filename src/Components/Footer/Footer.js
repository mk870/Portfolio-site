import React from 'react'
import { FooterStyles } from './FooterStyles'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {IoDocumentText} from 'react-icons/io5'

const Footer = () => {
  return (
    <FooterStyles>
       <div className="name">
        <span className='name2'>Mkhue</span>
        mkhue47@gmail.com
      </div>
      <div className="details">
        <div className="linkedIn">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <ImLinkedin fontSize={23} color={'blue'}/>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="github">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <BsGithub fontSize={23} color={'white'}/>
            <span>Github</span>
          </a>
        </div>
        <div className="resume">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <IoDocumentText fontSize={23} color={'white'}/>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer