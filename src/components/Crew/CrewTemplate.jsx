import React from 'react'
import { useState } from 'react'
import CrewText from './CrewText'
import CrewCall from './CrewCall'
import { AnimatePresence, motion } from 'framer-motion'


function CrewTemplate({ crewdata }) {

    const [selected, setSelected] = useState(crewdata[0])
    const { bio, images, name, role } = selected


    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="crewtemplate">
                <div className="crew__box1">
                    <CrewCall />
                    <CrewText role={role} bio={bio} name={name} />
                    <div className="crew__box1-buttons">
                        {crewdata.map((i) => {
                            return (
                                <button key={i.name}
                                    onClick={() => { setSelected(crewdata[crewdata.indexOf(i)]) }}
                                    className={selected === crewdata[crewdata.indexOf(i)] ? 'crew__button crew__button-active' : 'crew__button'}>
                                </button>
                            )
                        })}
                    </div>
                </div>
                <div className="crew__box2">
                    <AnimatePresence exitBeforeEnter>
                        <motion.img
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 1 }}
                            className='crew__image' src={require('../../' + images.png.slice(2))}
                            alt={name} />
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    )
}

export default CrewTemplate