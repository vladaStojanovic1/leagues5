import React from 'react'
import { Table } from 'react-bootstrap';
import moment from 'moment';
import spain from '../../img/iconLeague/spain.png'
import england from '../../img/iconLeague/england.png'
import france from '../../img/iconLeague/france.png'
import italy from '../../img/iconLeague/italy.png'
import germany from '../../img/iconLeague/germany.png'
import netherlands from '../../img/iconLeague/netherlands.png'
import portugal from '../../img/iconLeague/portugal.png'
import championsLeague from '../../img/uefa-champions-league.png'
import { Calendar } from '../calendar/Calendar';
import { Pagination } from '../pagination/Pagination';
import { Link } from 'react-router-dom';

export const TableResults = ({
    currentMatches,
    handleDate,
    date,
    matchesPerPage,
    matchesLength,
    paginate
}) => {


    /******* Display country flag depending on league ******/
    const flags = (competition) => {
        switch (competition) {
            case 'Serie A':
                return <img className='png-icon-results' src={italy} alt='icon-flag' />
            case 'Primera Division':
                return <img className='png-icon-results' src={spain} alt='icon-flag' />
            case 'Premier League':
                return <img className='png-icon-results' src={england} alt='icon-flag' />
            case 'Championship':
                return <img className='png-icon-results' src={england} alt='icon-flag' />
            case 'Bundesliga':
                return <img className='png-icon-results' src={germany} alt='icon-flag' />
            case 'Ligue 1':
                return <img className='png-icon-results' src={france} alt='icon-flag' />
            case 'Eredivisie':
                return <img className='png-icon-results' src={netherlands} alt='icon-flag' />
            case 'Primeira Liga':
                return <img className='png-icon-results' src={portugal} alt='icon-flag' />
            case 'UEFA Champions League':
                return <img className='png-icon-results' style={{ width: '40px' }} src={championsLeague} alt='icon-flag' />
            default: console.log('Default');
        }
    }

    /*********** Display football match status  ***********/
    const checkMatchStatus = (matchStatus) => {
        if (matchStatus === 'FINISHED') {
            return <div className='halfTime-status'>
                <span>END</span>
            </div>
        }
        else if (matchStatus === 'PAUSED') {
            return <div className='halfTime-status'>
                <span>HT</span>
            </div>
        }
    }


    return (
        <div className='table' >

            {/* Calendar */}
            <div className='calendar-div'>
                <h3 className='schedule-p'>Schedule, upcoming matches & <span>live scores.</span></h3>
                <p>Click on one particular match to see his statistic</p>
                <div className='calendar-content'>
                    <Calendar handleDate={handleDate} date={date} />
                </div>
            </div>

            {/* Display alert if today not has football matches */}
            {!matchesLength ? <div style={{ textAlign: 'center' }}><p className='no-matches'>Today not has matches, please select another day...</p></div> : null}

            {/* Table Start */}
            <Table striped hover className='table-component' >
                <tbody>
                    {currentMatches.map((match, index) => {

                        return (
                            <tr key={index}>
                                <td className='td-date' >
                                    {moment(match.utcDate).format('HH:mm')}<br />{match.country}
                                </td>

                                <td className='td-content'>
                                    <Link className='match-link' to={`head2head/${match.id}`}>
                                        <div className='flag-homeTeam' >
                                            <div className='icon-country'>

                                                {/***** Display country flag depending on league *****/}
                                                {flags(match.competition.name)}

                                            </div>
                                            <div className='home-team-name'>
                                                <span>{match.homeTeam.name}</span>
                                            </div>
                                        </div>
                                        <div className='scores '>

                                            {/* Animation for matches who going live*/}
                                            <div className={match.status === 'IN_PLAY' ? 'animated infinite flash slower' : null}>
                                                <span className='homeScore'>{match.score.fullTime.homeTeam}</span> -&nbsp;
                                                <span className='awayScore'>{match.score.fullTime.awayTeam}</span>
                                            </div>
                                            {match.score.halfTime.homeTeam !== null ?
                                                <div className='half-time-res' >
                                                    (<span>{match.score.halfTime.homeTeam}</span> -&nbsp;
                                                <span>{match.score.halfTime.awayTeam}</span>)
                                             </div>
                                                : null
                                            }
                                        </div>
                                        <div className='away-team-name'>
                                            <span>{match.awayTeam.name}</span>
                                        </div>

                                        {/***  Display football match status ***/}
                                        {checkMatchStatus(match.status)}
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
            {/* Table End */}

            {/* Pagination */}
            <Pagination
                matchesLength={matchesLength}
                matchesPerPage={matchesPerPage}
                paginate={paginate} />
        </div>
    )
}
