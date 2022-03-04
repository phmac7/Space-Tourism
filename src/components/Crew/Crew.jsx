import React from 'react'
import { useState } from 'react'
import CrewData from './CrewData'
import CrewTemplate from './CrewTemplate'

function Crew() {

    const [crewdata, setcrewdata] = useState(CrewData)


    return (
        <section className='crew default-content'>
            <CrewTemplate crewdata={crewdata} />
        </section>
    )
}

export default Crew