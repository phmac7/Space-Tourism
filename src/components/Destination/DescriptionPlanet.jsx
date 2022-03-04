function DescriptionPlanet({ name, description, distance, travel }) {
    return (
        <>
            <h2 className="h2 planet__title">
                {name}
            </h2>
            <p className="paragraph planet__paragraph">
                {description}
            </p>
            <div className='planetsubinfo'>
                <div className="avgdistance">
                    <span className='avgdistance__title'>Avg. Distance</span>
                    <span className='avgdistance__value'>{distance}</span>
                </div>
                <div className="traveltime">
                    <span className='traveltime__title'>Est. travel time</span>
                    <span className='traveltime__value'>{travel}</span>
                </div>
            </div>
        </>
    )
}

export default DescriptionPlanet