import React from 'react'

import { Link } from 'react-router-dom';
import { PiSoccerBallFill } from "react-icons/pi";

const Logo = () => {
    return (
        <h1 className="header__logo">
            <Link to="/">
                <em><PiSoccerBallFill /></em>
                <span>Soccer<br />Youtube</span>
            </Link>
        </h1>
    )
}

export default Logo