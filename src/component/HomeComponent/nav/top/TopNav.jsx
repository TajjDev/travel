import React, { useEffect, useState } from 'react'
import Links from '../../links/Links'
import './topNav.css'
import { Link } from 'react-router-dom'
import imgLogo from "./src/assets/logo.png"

const Topnav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showDropDownMenu, setShowDropDownMenu] = useState(false)
  
  const [change, setChange] = useState(false)
  const functionWidth = ()=>{
    const handleWidth = ()=>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWidth);
    return()=>{
      window.removeEventListener('resize', handleWidth)
    }
  }
  useEffect(()=>{
    functionWidth()
  },[])
  const toggleMenu = ()=>{
    setShowDropDownMenu(!showDropDownMenu)
    setChange(!change)
  }
  
  const [navScroll ,setNavScroll]= useState(false)
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY  >= 20 ){
        setNavScroll(true)
      }
      else{
        setNavScroll(false)
      }
    };
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  return (
      <div id="thenav" style={{position: navScroll ? 'fixed' : 'static', top:0,
    paddingTop: navScroll ? "10px" : "10px",background: navScroll ? "rgba(7, 7, 7, 0.9)" :"none" }}>
        <div id="logo">
          <div id="theLogo">
           <img src={imgLogo} alt="travel" />
          </div>
          
        </div>
        {window.innerWidth < 650 ? (
                <div className="dropdown">
                  <button style={{textShadow:navScroll ? "2px 2px 5px #504f4f" : "2px 2px 5px #000" }} onClick={toggleMenu}>{change ? "Hide":"Menu"}</button>
                  {showDropDownMenu && (
                    <div  id="dropdown-content">
                      <Links to={'/'} label={'Home'} />
                      <Links to={'/about'} label={'About Us'} />
                      <Links to={'/traveladvisory'} label={'Travel advisory'} />
                    </div>
                  )}
                </div>
              ) : (
                <div id='links'>
                <Links to={'/'} label={'Home'} />
                <Links to={'/about'} label={'About Us'} />
                <Links to={'/traveladvisory'} label={'Travel advisory'} />
              </div >
              )}


        <div id="search">
          <input type="search" placeholder='Advisers' />
        </div>
      </div>
  )
}

export default Topnav
