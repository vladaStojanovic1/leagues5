import React from 'react'
import ball from '../img/ball2.png';
import { Link } from 'react-router-dom';


export const Logo = () => {

    return (
        <Link to='/'>
            <div className='logo-div'>
                <div className='logo-content'>
                    <img src={ball} alt="logo-ball" />
                    <h1>Leagues<span>5</span></h1>
                </div>
            </div>
        </Link>
    )
}
