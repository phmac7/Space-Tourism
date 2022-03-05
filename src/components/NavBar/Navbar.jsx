import React from 'react'
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import NavbarItems from './NavbarItems'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <Logo className="navbar__logo" />
                <NavbarItems />
            </nav>
        </>
    )
}

export default Navbar