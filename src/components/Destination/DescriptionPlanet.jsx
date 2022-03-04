import { AnimatePresence, motion } from "framer-motion"

function DescriptionPlanet({ name, description, distance, travel }) {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}>

                    <h2 className="h2 planet__title">
                        {name}
                    </h2>
                    <p className="paragraph planet__paragraph">
                        {description}
                    </p>
                </motion.div>
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className='planetsubinfo'>
                    <div className="avgdistance">
                        <span className='avgdistance__title'>Avg. Distance</span>
                        <span className='avgdistance__value'>{distance}</span>
                    </div>
                    <div className="traveltime">
                        <span className='traveltime__title'>Est. travel time</span>
                        <span className='traveltime__value'>{travel}</span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default DescriptionPlanet