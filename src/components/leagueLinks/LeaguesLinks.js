import React, { useEffect, useState } from 'react'
import serieA from '../../img/serie a 1.png';
import championLeague from '../../img/uefa-champions-league.png';
import laLiga from '../../img/laliga2.png';
import franceLeague from '../../img/france ligue 1.png';
import bundesLeague from '../../img/Bundesliga 1.png';
import premierLeague from '../../img/premier4.png';
import { Link } from 'react-router-dom';


export const LeaguesLinks = () => {

    /*********** Change HOVER effect on Tablet mode  ***************/
    const [isTablet, setIsTablet] = useState();

    useEffect(() => {
        const tabletWidth = () => {
            setIsTablet(window.innerWidth < 800);
        }
        window.addEventListener('resize', tabletWidth);

        return () => {
            window.removeEventListener('resize', tabletWidth);
        }
    }, [isTablet])
    const animationClass = isTablet ? 'hvr-rectangle-out' : 'hvr-icon-rotate';
    /*********** Change HOVER effect on Tablet mode  ***************/



    return (
        <div className='leagues-links'>
            <p className='descriptions-p'>Follow the top leagues (EPL, La Liga, Bundesliga, Serie A, Ligue 1, Eredivisie, MLS, A-League) and all international tournaments like Champions League, UEFA Europa league, live matches and statistic for every match <br /> only on <span className='span-leagues'>leagues</span><span className='span-5'>5</span>.</p>

            <div className="all-cards">

                <Link to='/spanish/2014' >
                    <div className={`my-card ${animationClass}`} >
                        <div className="img-div">
                            <img src={laLiga} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

                <Link to='/england/2021' className='league-link'>
                    <div className={`my-card ${animationClass}`}>
                        <div className="img-div">
                            <img src={premierLeague} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

                <Link to='/italy/2019' className='league-link'>
                    <div className={`my-card ${animationClass}`}>
                        <div className="img-div">
                            <img src={serieA} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

                <Link to='/germany/2002' className='league-link'>
                    <div className={`my-card ${animationClass}`}>
                        <div className="img-div">
                            <img src={bundesLeague} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

                <Link to='france/2015' className='league-link'>
                    <div className={`my-card ${animationClass}`}>
                        <div className="img-div">
                            <img src={franceLeague} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

                <Link to='champions-league/2001' className='league-link'>
                    <div className={`my-card ${animationClass}`}>
                        <div className="img-div">
                            <img src={championLeague} alt="" className='hvr-icon' />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
