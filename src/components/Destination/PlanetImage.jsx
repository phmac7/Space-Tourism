import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'


function PlanetImage({ url, planetname }) {
    return (

        <div className="destination-box1">
            <div className="box1__pick">
                <span className='box1__pick-number'>01</span>Pick your destination
            </div>
            <div className='box1__planetfig'>
                <AnimatePresence exitBeforeEnter>
                    <motion.img
                        key={planetname}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='planetimage'
                        src={require('../../' + url.png.slice(2))}
                        alt={planetname} />
                </AnimatePresence>
            </div>
        </div>
    )
}

export default PlanetImage