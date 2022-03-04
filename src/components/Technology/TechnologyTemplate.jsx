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
                    {techdata.map((i) => {
                        return (
                            <button key={i.name}
                                onClick={() => { setSelected(techdata[techdata.indexOf(i)]) }}
                                className={selected === techdata[techdata.indexOf(i)] ? 'techcontent__btn tech__active' : 'techcontent__btn'}>
                                {techdata.indexOf(i) + 1}
                            </button>
                        )
                    })}
                </div>
                <div className="techcontent__text">
                    <span className='techcontent__text-subtitle'>The terminology...</span>
                    <h3 className='h3 techcontent__text-title h3'>{name}</h3>
                    <p className='paragraph techcontent__text-p'>{description}</p>
                </div>
                <div className="techcontent__imgbox">
                    <img className="techcontent__img" src={require('../../' + images.portrait.slice(2))} />
                </div>
            </div>
        </div>
    )
}

export default TechnologyTemplate