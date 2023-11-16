import React from 'react'

import { todayText } from '../../data/today'

const Today = () => {
    return (
        <section id='todayPage'>
            <h2>🏃‍♂️오늘의 추천 픽🏃‍♂️</h2>

            <div className="today__inner">
                <div className="today__thubm"><img src={todayText[0].img} alt="" /></div>
                <div className="today__text">
                    <span className='today'>오늘의 픽!</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <div className='info'>
                        <span className='autor'>{todayText[0].autor}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today