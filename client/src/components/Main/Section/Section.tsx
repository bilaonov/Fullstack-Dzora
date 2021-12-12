import React, { useState, useEffect } from 'react'
import './Section.scss'

import moon from '../../../assets/moon.png'
import bg from '../../../assets/back.jpeg'
import mountain from '../../../assets/mountain.png'

const Section: React.FC = () => {
    const [scrollValue, setScrollValue] = useState<any>()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let value: any = window.scrollY
            setScrollValue(value)
        })
    }, [])
    return (
        <div>
            <section>
                <img src={bg} style={{ top: -scrollValue * 0.3 + 'px' }} alt="" id="bg" />

                <img src={moon} style={{ left: -scrollValue * 0.5 + 'px' }} alt="sad" id="moon" />

                <img src={mountain} alt="" id="mountain" />

                <h2 style={{ top: scrollValue * 0.5 + 'px' }}>ОСЕТИЯ</h2>
            </section>
        </div>
    )
}

export default Section
