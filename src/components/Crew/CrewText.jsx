import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function CrewText({ role, name, bio }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
                className='crew-text'>
                <h4 className='h4 crew-text__crew-role'>{role}</h4>
                <h3 className='h3 crew-text__crew-name'>{name}</h3>
                <p className="paragraph crew-text__crew-bio">{bio}</p>
            </motion.div>
        </AnimatePresence >

    )
}

export default CrewText