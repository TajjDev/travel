import React from 'react'
import { NavLink } from 'react-router-dom'
import './links.css'

const Links = ({to,label,icon}) => {
  return (<>
    <NavLink id='link' to={to}>
        <span id='span2'>{label}</span>
    </NavLink></>
  )
}

export default Links
