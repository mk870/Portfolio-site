import React from 'react'
import { FooterStyles } from './FooterStyles'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterStyles>
      <div className="name">
        <span className='name2'>Mkhue</span>
        mkhue47@gmail.com
      </div>
      <div className="details">
        
        <div className="linkedIn">
          <a href={'https://www.linkedin.com/in/mkhululi-ndlovu-28ab9b248'} target="_blank" rel='noreferrer'>
            <ImLinkedin fontSize={23} color={'aliceblue'}/>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="github">
          <a href={'https://github.com/mk870'} target="_blank" rel='noreferrer'>
            <BsGithub fontSize={23} color={'aliceblue'}/>
            <span>Github</span>
          </a>
        </div>
        
      </div>
    </FooterStyles>
  )
}

export default Footer