/* eslint-disable no-undef */
import React from 'react'
import logo from "../logo.png"
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="LOGO" />
        <div>
            <Link to="./TvShows">TV Shows</Link>
            <Link to="./Movies">Movies</Link>
            <Link to="./RecentlyAdded">Recently Added</Link>
            <Link to="./MyList">My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
