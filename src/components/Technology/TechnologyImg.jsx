import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useLayoutEffect } from 'react'


function TechnologyImg({ name, images }) {

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
        if (size[0] < 768) {
            return (images.landscape.slice(2))
        } else {
            return (images.portrait.slice(2))
        }
        // return size;
    };
    // console.log(useWindowSize())

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="techcontent__imgbox">
                <img className="techcontent__img" src={require('../../' + useWindowSize())} />
            </motion.div>
        </AnimatePresence>
    )
}

export default TechnologyImg