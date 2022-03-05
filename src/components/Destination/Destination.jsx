import React from 'react'
import DestinationTemplate from './DestinationTemplate'
import PlanetData from './PlanetData'
import { useState } from 'react'

function Destination() {

    const [planetdata, setplanetdata] = useState(PlanetData)

    return (

        <section className='destination default-content'>
            <DestinationTemplate planetdata={planetdata} />
        </section>
    )
}



export default Destination