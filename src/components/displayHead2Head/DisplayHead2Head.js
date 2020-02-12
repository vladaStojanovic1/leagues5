import React from 'react'
import stadium from '../../img/stadium.png'


export const DisplayHead2Head = ({ matchInfo }) => {


    const halfTimeStatus = (halfTimeStatus) => {
        if (halfTimeStatus === 'FINISHED') {
            return <p className='match-status'>FINISHED</p>
        }
        else if (halfTimeStatus === 'PAUSED') {
            return <p style={{ background: 'lightgreen', color: 'black' }} className='match-status'>HALF-TIME</p>
        }
    }

    return (
        <div className='head2head-content'>
            <h2>Match Facts</h2>
            <div style={{ margin: 'auto', marginTop: '20px' }}>
                <div className='teams-name' >
                    <p >{matchInfo.homeTeamName}</p>
                    <p >{matchInfo.awayTeamName}</p>
                </div>
                <div className='test' style={{ width: '80%', margin: 'auto' }}>
                    <img src={stadium} alt="" style={{ width: '100%' }} />

                    {/********** Animation for matches who going live ************/}
                    <div className={matchInfo.status === 'IN_PLAY' ? 'animated infinite flash slower' : null}>
                        <p className='home'>{matchInfo.status === 'SCHEDULED' ? '-' : matchInfo.fullTimeScoreHome}</p>
                        <p className='away'>{matchInfo.status === 'SCHEDULED' ? '-' : matchInfo.fullTimeScoreAway}</p>
                    </div>

                    {/********** Check match status **************/}
                    {halfTimeStatus(matchInfo.status)}
                </div>
            </div>
            <div className="head2head">
                <p className='stadium-name'>Stadium &rArr; {matchInfo.stadium}</p>
                <span className='halfTime'>{matchInfo.halfTimeScoreHome === null ? '-' : matchInfo.halfTimeScoreHome}</span> &nbsp;
                <span className='halfTime'>Half Time</span> &nbsp;
                <span className='halfTime'>{matchInfo.halfTimeScoreAway === null ? '-' : matchInfo.halfTimeScoreAway}</span>

                <div className='numOfMatches'>
                    <h2>Number of matches</h2>
                    <span>{matchInfo.numOfMatches}</span>
                </div>

                {/************ Head 2 Head **************/}
                <h2>Head 2 Head</h2>
                <div >
                    <span className='wins'>{matchInfo.homeTeamWins}</span> &nbsp;
                    <span>WINS</span> &nbsp;
                    <span className='wins'>{matchInfo.awayTeamWins}</span>
                </div>
                <div>
                    <span className='draws'>{matchInfo.homeTeamDraws}</span> &nbsp;
                    <span>DRAWS</span> &nbsp;
                    <span className='draws'>{matchInfo.awayTeamDraws}</span>
                </div>
                <div >
                    <span className='losses'>{matchInfo.homeTeamLosses}</span> &nbsp;
                    <span>LOSSES</span> &nbsp;
                    <span className='losses'>{matchInfo.awayTeamLosses}</span>
                </div>

                <div className='total-goals'>
                    <h2>Total goals</h2>
                    <span>{matchInfo.totalGoals}</span>
                </div>

                {/**********  Display Referees ***********/}
                <div className='referees'>
                    <h2>Referees</h2>
                    {matchInfo.referees ? matchInfo.referees.map((r) => (
                        <span>{r.name}</span>
                    )) : null}
                </div>
            </div>
        </div>
    )
}
