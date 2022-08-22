import React, { useEffect, useState } from 'react'
import { NavbarStyles } from './NavbarStyles'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [dropMenu,setDropMenu] = useState(false)
  const [desktopMenu,setDesktopMenu] = useState(true)
  const[screenSize,setScreenSize] = useState(null)
  const navigate = useNavigate()
  useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return()=>window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(screenSize <= 630){
      setDesktopMenu(false)
    }else{
      setDesktopMenu(true)
    }
  },[screenSize])

  return (
    <NavbarStyles>
      <div className="name">
        <span className='name2'>Mkhue</span>
        mkhue47@gmail.com
      </div>
      {desktopMenu?<div className="details">
        
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
        
      </div>: 
        <div className='mobile'>
          <div className="menu" >
            {dropMenu?<AiOutlineClose size={31} color={'aliceblue'} onClick={()=>setDropMenu(!dropMenu)}/>:
            <HiMenu size={34} color={'aliceblue'} onClick={()=>setDropMenu(!dropMenu)}/>}
          </div>
          <div className="dropdown">{dropMenu && <Dropdown/>}</div>
          </div>}
    </NavbarStyles>
  )
}

export default Navbar