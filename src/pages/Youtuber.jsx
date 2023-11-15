import React from 'react'
import { Link } from 'react-router-dom'
import { youtuberText } from '../data/youtuber'

const youtuber = () => {
    return (
        <section className="youtuber">
            <h2>😀축구 유튜버 모음</h2>
            <div className="youtuber__inner">
                {youtuberText.map((youtuber, key) => (
                    <div className="youtuber play__icon" key={key}>
                        <div className="youtuber__img">
                            <Link to={`/channel/${youtuber.channelId}`}>
                                <img src={youtuber.img} alt={youtuber.autor} />
                            </Link>

                        </div>

                        <div className="youtuber__info">{youtuber.autor}</div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default youtuber