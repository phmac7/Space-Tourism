import React from 'react'
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Logo className="navbar__logo" />
                <ul className='navbar__list'>
                    <li className="navbar__list-item"><NavLink to="/" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>00 </span><span className='navbar-title'>HOME</span></NavLink></li>
                    <li className="navbar__list-item"><NavLink to="/destination" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>01 </span><span className='navbar-title'>DESTINATION</span></NavLink></li>
                    <li className="navbar__list-item"><NavLink to="/crew" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>02 </span><span className='navbar-title'>CREW</span></NavLink></li>
                    <li className="navbar__list-item"><NavLink to="/technology" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>03 </span><span className='navbar-title'>TECHNOLOGY</span></NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar