import React from 'react';
import PlanetImage from './PlanetImage';
import { useState } from 'react';
import DescriptionPlanet from './DescriptionPlanet'

function DestinationTemplate({ planetdata }) {

    const [selected, setSelected] = useState(planetdata[0])
    const { name, images, description, distance, travel } = selected


    return (
        <>
            <div className="destinationtemplate">
                <PlanetImage url={images} planetname={name} />
                <div className="destination-box2">

                    <ul className="planet__list">
                        {planetdata.map((i) => {
                            return (
                                <li key={i.name} className="planet__name ">
                                    <button
                                        onClick={() => { setSelected(planetdata[planetdata.indexOf(i)]) }}
                                        className={selected === planetdata[planetdata.indexOf(i)] ? "planet__name-btn planet__name-on" : "planet__name-btn"}>{i.name}
                                    </button>
                                </li>)
                        })}
                    </ul>
                    <DescriptionPlanet
                        name={name}
                        description={description}
                        distance={distance}
                        travel={travel}
                    />
                </div>
            </div>
        </>
    )
}



export default DestinationTemplate