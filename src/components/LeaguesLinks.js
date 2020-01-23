import React from 'react'
import serieA from '../img/serie a 1.png';
import championLeague from '../img/champions league 1.png';
import laLiga from '../img/la liga 1.png';
import franceLeague from '../img/france ligue 1.png';
import bundesLeague from '../img/Bundesliga 1.png';
import premierLeague from '../img/premier3.png';
import { Link } from 'react-router-dom';


export const LeaguesLinks = () => {


    return (
        <div className='leagues-links'>
            <h1 style={{ color: 'white' }}>League Links</h1>

            <div className="all-cards">

                <div className="my-card">
                    <Link to='champions-league/2001'>
                        <div className="img-div">
                            <img src={championLeague} alt="" />
                        </div>
                        <div className="info">
                            <p>Europe</p>
                            <h3>Champion League</h3>
                        </div>
                    </Link>
                </div>

                <div className="my-card">
                    <Link to='/spanish/2015'>
                        <div className="img-div">
                            <img src={laLiga} alt="" />
                        </div>
                        <div className="info">
                            <p>Spanis</p>
                            <h3>La Liga</h3>
                        </div>
                    </Link>
                </div>

                <div className="my-card">
                    <Link to='/england/2021'>
                        <div className="img-div">
                            <img src={premierLeague} alt="" />
                        </div>
                        <div className="info">
                            <p>England</p>
                            <h3>Premier League</h3>
                        </div>
                    </Link>
                </div>

                <div className="my-card">
                    <Link to='/italy/2019'>
                        <div className="img-div">
                            <img src={serieA} alt="" />
                        </div>
                        <div className="info">
                            <p>Italy</p>
                            <h3>SERIE A</h3>
                        </div>
                    </Link>
                </div>

                <div className="my-card">
                    <Link to='/germany/2002'>
                        <div className="img-div">
                            <img src={bundesLeague} alt="" />
                        </div>
                        <div className="info">
                            <p>Germany</p>
                            <h3>Bundesliga</h3>
                        </div>
                    </Link>
                </div>

                <div className="my-card">
                    <Link to='france/2015'>
                        <div className="img-div">
                            <img src={franceLeague} alt="" />
                        </div>
                        <div className="info">
                            <p>France</p>
                            <h3>Ligue 1</h3>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
