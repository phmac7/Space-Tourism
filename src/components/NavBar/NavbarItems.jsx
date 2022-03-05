import React from 'react'
import { ReactComponent as Hamburger } from '../../assets/shared/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/shared/icon-close.svg';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavbarLinks from './NavbarLinks';

function NavbarItems() {

    const [toggle, setToggle] = useState(true)

    //which icon should render:
    const icon = () => {
        if (toggle) {
            return <Hamburger className='icon' />
        } else {
            return <Close className='icon' />
        }
    }

    return (
        <>
            <NavbarLinks toggle={toggle} setToggle={setToggle} />

            <AnimatePresence exitBeforeEnter>
                <motion.button
                    key={toggle}
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: .8 }}
                    transition={{ duration: .3 }}
                    onClick={() => {
                        if (toggle) {
                            setToggle(false)
                        } else { setToggle(true) }
                    }
                    }
                    className='hamburger'>
                    {icon()}
                </motion.button>
            </AnimatePresence>
        </>
    )
}

export default NavbarItems