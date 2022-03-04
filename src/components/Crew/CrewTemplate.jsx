import React from 'react'
import { useState } from 'react'
import CrewText from './CrewText'
import CrewCall from './CrewCall'


function CrewTemplate({ crewdata }) {

    const [selected, setSelected] = useState(crewdata[0])
    const { bio, images, name, role } = selected


    return (
        <>
            <div className="crewtemplate">
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
                    <img className='crew__image' src={require('../../' + images.png.slice(2))}
                        alt={name} />
                </div>
            </div>
        </>
    )
}

export default CrewTemplate