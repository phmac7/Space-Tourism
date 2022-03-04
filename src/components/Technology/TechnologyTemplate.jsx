import React from 'react'
import Technology from './Technology'
import { useState } from 'react'
import TechCall from './TechCall'

function TechnologyTemplate({ techdata }) {

    const [selected, setSelected] = useState(techdata[0])
    const { name, images, description } = selected
    console.log(techdata.map((i) => {
        return (techdata.indexOf(i))
    }))

    return (
        <div className='techtemplate'>
            <TechCall />
            <div className='techcontent'>
                <div className="techcontent__buttonlist">
                    {/* {techdata.map((i)=> {
                        <button 
                        className='techcontent__buttonlist-button'>
                            {}
                        </button>
                    })} */}
                </div>
                <div className="techcontent__text">
                    <span className='techcontent__text-subtitle'>The terminology...</span>
                    <h3 className='h3 techcontent__text-title'>{name}</h3>
                    <p className='paragraph techcontent__text-p'>{description}</p>
                </div>
                <div className="techcontent__img">
                    <img src={require('../../' + images.landscape.slice(2))} />
                </div>
            </div>
        </div>
    )
}

export default TechnologyTemplate