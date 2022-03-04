import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <section className='homepage default-content'>
                <div className='home__text'>
                    <h5 className='h5'>So, you want to travel to</h5>
                    <h1 className='h1'>SPACE</h1>
                    <p className='paragraph'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <Link to='/destination' className='homepage__button'>
                    <h4 className='h4'>explore</h4>
                </Link>
            </section>
        </>
    )
}

export default HomePage