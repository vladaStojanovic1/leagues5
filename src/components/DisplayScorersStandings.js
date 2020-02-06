import React from 'react'
import { Table } from 'react-bootstrap';
import { IoIosFootball } from "react-icons/io";


export const DisplayScorersStandings = ({ scorersStandings }) => {

    console.log(scorersStandings);


    return (
        <div className='scorers-standings'>

            <Table striped hover>
                <tbody style={{ background: 'azure' }}>
                    {scorersStandings.map((scorer, index) => {

                        return (
                            <tr className='tr-scorers' key={index}>
                                <td className='td-scorers' >
                                    <div>
                                        <p className='scorer-name'>{scorer.name}</p>
                                        <p className='scorer-team'>{scorer.team}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p className='goal-number'>{scorer.numberOfGoals}</p>
                                        <IoIosFootball style={{ color: 'black', width: '20px' }} />
                                    </div>
                                    <div>
                                        <p className='soccer-country'>{scorer.country}</p>
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
