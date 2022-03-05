import React, { useState, useLayoutEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


function NavbarLinks({ toggle, setToggle }) {
    //getwidth
    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        let timeoutId = null;
        useLayoutEffect(() => {
            const updateSize = () => {
                // set a timeout for performance purposes
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => (setSize([window.innerWidth, window.innerHeight])), 150)
            };
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        if (size[0] > 375) {
            return false
        } else { return true }
        // return if its mobile or not;
    };

    //if its not mobile, do not animate entrance and exit of the navbar
    if (!useWindowSize()) {
        return (
            <>
                <ul className={(toggle) ? 'navbar__list' : 'navbar__list toggle'}>

                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>00 </span><span className='navbar-title'>HOME</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/destination" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>01 </span><span className='navbar-title'>DESTINATION</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/crew" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>02 </span><span className='navbar-title'>CREW</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/technology" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>03 </span><span className='navbar-title'>TECHNOLOGY</span></NavLink></li>

                </ul>
            </>
        )
    }

    //if its mobile, animate entrance and exit of the navbar
    return (
        <>
            < AnimatePresence exitBeforeEnter >
                <motion.ul
                    key={toggle}
                    initial={{ opacity: 0, x: 254 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 254 }}
                    transition={{ duration: .3 }}

                    className={(toggle) ? 'navbar__list' : 'navbar__list toggle'}>

                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>00 </span><span className='navbar-title'>HOME</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/destination" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>01 </span><span className='navbar-title'>DESTINATION</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/crew" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>02 </span><span className='navbar-title'>CREW</span></NavLink></li>
                    <li onClick={() => { (toggle) ? setToggle(false) : setToggle(true) }} className="navbar__list-item">
                        <NavLink to="/technology" activeclassname='active' className="navbar__list-link"><span className='navbar-number'>03 </span><span className='navbar-title'>TECHNOLOGY</span></NavLink></li>

                </motion.ul>
            </AnimatePresence >
        </>
    )
}

export default NavbarLinks