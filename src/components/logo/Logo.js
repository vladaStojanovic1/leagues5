import React from 'react'
import ball from '../../img/ball2.png';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export const Logo = () => {

    return (

        <Link className='logo-link' to='/'>
            <div className='logo-div '>
                <Zoom left cascade>
                    <div className='logo-content'>
                        <img src={ball} alt="logo-ball" />
                        <h1>Leagues<span>5</span></h1>
                    </div>
                </Zoom>
                <p>All football results in one place. Realtime.</p>
            </div>
        </Link>
    )
}
