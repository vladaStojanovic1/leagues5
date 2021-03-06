import React from 'react'
import { Table } from 'react-bootstrap';
import championsLeague from '../../img/championsLeague.png';
import Spin from 'react-reveal/Spin';


export const DisplayChampionsLeague = ({ championsLeagueGroups, competitionName }) => {

    return (
        <div className='championsLeague-section' >

            <div className='championsLeague-icon'>
                <Spin>
                    <img src={championsLeague} alt="champions-league" />
                </Spin>
                <p><span>{competitionName}</span> standings</p>
            </div>

            <div className='champions-league' >

                {championsLeagueGroups.map((group, index) => {

                    return (
                        <div key={index}>
                            <h3 className='group-name'>{group.group.replace('_', ' ')}</h3>
                            {group.table.map((group, index) => {

                                return (
                                    <Table className='cl-table' striped hover key={index}>
                                        <tbody style={{ background: 'azure' }}>

                                            <tr >
                                                <td className='cl-content' style={{ lineHeight: '1' }}>

                                                    <div className='cl-imgAndPostion'>
                                                        <h4>{group.position}</h4>
                                                        <img src={group.team.crestUrl} alt="icon-team" />
                                                    </div>

                                                    <div className='cl-name'>
                                                        <p>{group.team.name}</p>
                                                        <div className='spans'>
                                                            <span className='cl-won'>{group.won}W</span>
                                                            <span className='cl-draw'>{group.draw}D</span>
                                                            <span className='cl-lost'>{group.lost}L</span>
                                                        </div>
                                                    </div>

                                                    <div className='cl-points'>
                                                        <p>{group.playedGames}</p>
                                                        <p>{group.points}</p>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                )
                            })}
                        </div>
                    )
                })
                }
            </div >
        </div>
    )
}


