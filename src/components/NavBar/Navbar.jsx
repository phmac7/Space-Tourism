import React from 'react'
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import NavbarItems from './NavbarItems'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink className='navbar__logobox' to='/'>
                    <Logo className="navbar__logo" />
                </NavLink>
                <NavbarItems />
            </nav>
        </>
    )
}

export default Navbar