import React from 'react'
import serieA from '../img/serie a 1.png';
import championLeague from '../img/uefa-champions-league.png';
import laLiga from '../img/laliga2.png';
import franceLeague from '../img/france ligue 1.png';
import bundesLeague from '../img/Bundesliga 1.png';
import premierLeague from '../img/premier4.png';
import { Link } from 'react-router-dom';


export const LeaguesLinks = () => {


    return (
        <div className='leagues-links'>

            <div className="all-cards">

                <Link to='/spanish/2014' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={laLiga} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>Spanis</p> */}
                            {/* <h3>La Liga</h3> */}
                        </div>
                    </div>
                </Link>

                <Link to='/england/2021' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={premierLeague} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>England</p> */}
                            {/* <h3>Premier League</h3> */}
                        </div>
                    </div>
                </Link>

                <Link to='/italy/2019' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={serieA} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>Italy</p> */}
                            {/* <h3>SERIE A</h3> */}
                        </div>
                    </div>
                </Link>

                <Link to='/germany/2002' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={bundesLeague} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>Germany</p> */}
                            {/* <h3>Bundesliga</h3> */}
                        </div>
                    </div>
                </Link>

                <Link to='france/2015' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={franceLeague} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>France</p> */}
                            {/* <h3>Ligue 1</h3> */}
                        </div>
                    </div>
                </Link>

                <Link to='champions-league/2001' className='league-link'>
                    <div className="my-card">
                        <div className="img-div">
                            <img src={championLeague} alt="" />
                        </div>
                        <div className="info">
                            {/* <p>Europe</p> */}
                            {/* <h3>Champion League</h3> */}
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
