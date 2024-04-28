import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
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
    <div id="header">
      <div id="headerword">
        <h3>Independent Travel advisors,working for you</h3>
        <p id='p1'>Worry-less when going for a tour,we got you covered with our specialized Travel advisers</p>
      
      </div>
      </div>
  )
}

export default Header
