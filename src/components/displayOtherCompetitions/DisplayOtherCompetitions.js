import React from 'react'
import { Table } from 'react-bootstrap';
import premierLeague from '../../img/premier2.png';
import serieA from '../../img/serie a 1.png';
import primeraDivision from '../../img/la liga 1.png';
import bundesliga from '../../img/Bundesliga 2.png';
import ligue1 from '../../img/france ligue2.png';
import Spin from 'react-reveal/Spin';



export const DisplayOtherCompetitions = ({ teams, competitionName }) => {

    /********* Display League image depending on league **********/
    const checkLeagueName = () => {
        switch (competitionName) {
            case 'Premier League':
                return <img src={premierLeague} alt='league-name-icon' />
            case 'Serie A':
                return <img src={serieA} alt='league-name-icon' />
            case 'Primera Division':
                return <img src={primeraDivision} alt='league-name-icon' />
            case 'Bundesliga':
                return <img src={bundesliga} alt='league-name-icon' />
            case 'Ligue 1':
                return <img src={ligue1} alt='league-name-icon' />
            default: console.log('default');
        }
    }


    return (
        <div className='other-teams'>
            <div className='leagueName-icon'>

                {/* Display League image depending on league */}
                <Spin>{checkLeagueName()}</Spin>
                <p><span>{competitionName}</span> standings</p>
            </div>

            <Table striped >
                <tbody style={{ background: 'azure' }}>
                    {teams.map((team, index) => {

                        return (
                            <tr key={index}>
                                <td className='td-other-competition'>
                                    <div className='image-position'>
                                        <div>
                                            <h4 className='positionNum'>{team.position}</h4>
                                        </div>
                                        <img src={team.image} alt="team" />
                                    </div>
                                    <div className='team-name'>
                                        <p>{team.name}</p>
                                        <div>
                                            <span className='won'>{team.won}W</span>
                                            <span className='draw'>{team.draw}D</span>
                                            <span className='lost'>{team.lost}L</span>
                                        </div>
                                    </div>
                                    <div className='points'>
                                        <p>{team.playedGames}</p>
                                        <p>{team.points}</p>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
