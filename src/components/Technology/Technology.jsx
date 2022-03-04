import React from 'react'
import { useState } from 'react'
import TechnologyData from './TechnologyData'
import TechnologyTemplate from './TechnologyTemplate'

function Technology() {

    const [techdata, settechdata] = useState(TechnologyData)
    return (
        <section className='technology'>
            <TechnologyTemplate techdata={techdata} />
        </section>
    )
}

export default Technology