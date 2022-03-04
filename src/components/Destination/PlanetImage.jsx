import React from 'react'


function PlanetImage({ url, planetname }) {
    return (

        <div className="destination-box1">
            <div className="box1__pick">
                <span className='box1__pick-number'>01</span>Pick your destination
            </div>
            <div className='box1__planetfig'>
                <img className='planetimage'
                    src={require('../../' + url.png.slice(2))}
                    alt={planetname} />
            </div>
        </div>
    )
}

export default PlanetImage