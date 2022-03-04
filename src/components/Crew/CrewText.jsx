import React from 'react'

function CrewText({ role, name, bio }) {
    return (
        <div className='crew-text'>
            <h4 className='h4 crew-text__crew-role'>{role}</h4>
            <h3 className='h3 crew-text__crew-name'>{name}</h3>
            <p className="paragraph crew-text__crew-bio">{bio}</p>
        </div>
    )
}

export default CrewText