import React from 'react'
import { Link } from 'react-router-dom'
import { menuText } from '../../data/header'

const Menu = () => {
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Menu