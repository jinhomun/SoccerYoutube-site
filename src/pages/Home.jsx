import React from 'react'

// import { todayText } from '../data/today'
// import { youtuberText } from '../data/youtuber'
// import { Link } from 'react-router-dom'
import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'

const Home = () => {
    return (
        <>
            <Today />
            <Youtuber />

        </>
    )
}

export default Home