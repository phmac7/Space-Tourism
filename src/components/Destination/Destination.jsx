import React from 'react'
import DestinationTemplate from './DestinationTemplate'
import PlanetData from './PlanetData'
import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

function Destination() {

    const [planetdata, setplanetdata] = useState(PlanetData)

    return (

        <section className='destination default-content'>
            <DestinationTemplate planetdata={planetdata} />
        </section>
    )
}



export default Destination