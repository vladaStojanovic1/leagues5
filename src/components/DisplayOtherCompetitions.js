import React from 'react'
import { Table } from 'react-bootstrap';

export const DisplayOtherCompetitions = ({ teams }) => {

    return (
        <div className='other-teams'>

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
                                        <img src={team.image} alt="sss" />
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
