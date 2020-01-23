import React from 'react'
import { Table } from 'react-bootstrap';
import moment from 'moment';
import spain from '../img/iconLeague/spain.png'
import england from '../img/iconLeague/england.png'
import france from '../img/iconLeague/france.png'
import italy from '../img/iconLeague/italy.png'
import germany from '../img/iconLeague/germany.png'
import netherlands from '../img/iconLeague/netherlands.png'
import portugal from '../img/iconLeague/portugal.png'
import { Calendar } from './Calendar';
import { Pagination } from './Pagination';

export const TableResults = ({
    currentMatches,
    handleDate,
    date,
    matchesPerPage,
    matchesLength,
    paginate
}) => {

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
            default: console.log('Error');
        }
    }

    return (
        <div className='table' >
            <h1 style={{ color: 'white' }}>Today Matches</h1>

            <Calendar handleDate={handleDate} date={date} />

            <Table striped hover className='table-component'>
                <tbody>
                    {currentMatches.map((match, index) => {
                        console.log(match.score.halfTime.homeTeam)
                        return (
                            <tr key={index}>

                                <td className='td-date' >
                                    {moment(match.utcDate).format('HH:mm')}<br />{match.country}
                                </td>

                                <td className='td-content'>

                                    <div className='flag-homeTeam' >
                                        <div className='icon-country'>
                                            {flags(match.competition.name)}

                                        </div>
                                        <div className='home-team-name'>
                                            <span>{match.homeTeam.name}</span>

                                        </div>
                                    </div>

                                    <div className='scores'>
                                        <span style={{ fontSize: '18px' }}>{match.score.fullTime.homeTeam}</span> -&nbsp;
                                            <span style={{ fontSize: '18px' }}>{match.score.fullTime.awayTeam}</span>

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
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table >

            <Pagination
                matchesLength={matchesLength}
                matchesPerPage={matchesPerPage}
                paginate={paginate} />
        </div>
    )
}