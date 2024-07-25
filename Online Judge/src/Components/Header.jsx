import React from 'react'
import {Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="bg-slate-900">
    <ul className="flex flex-wrap text-white">
        <Link to={"/signin"}>
        <li className="block hover:bg-slate-400 hover:text-slate-800 px-3 py-1 mr-1">
        Sign In
        </li>
        </Link>
        <Link to={"/signup"}>
        <li className="block px-3 py-1 mr-1">
            Sign Up
        </li>
        </Link>
    </ul>
    </div>
    </>
  )
}

export default Header