import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar' className='row'>
      <Link to='/aboutme' className="link">About Me</Link>
      <Link to='/projects' className="link">Projects</Link>
    </div>
  )
}

export default Navbar