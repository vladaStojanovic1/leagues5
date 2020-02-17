import React from 'react'
import stadium from '../../img/stadium.png';
import Bounce from 'react-reveal/Bounce';


export const ChampionsLeagueMatches = ({ matchInfo, halfTimeStatus }) => {


    return (
        <>
            <h2 className='match-facts'>Match Facts</h2>
            <div style={{ margin: 'auto', marginTop: '20px' }}>
                <div className='teams-name' >
                    <Bounce left><p>{matchInfo.match.homeTeam.name}</p></Bounce>
                    <Bounce right><p>{matchInfo.match.awayTeam.name}</p></Bounce>
                </div>
                <div className='stadium-content' style={{ width: '80%', margin: 'auto' }}>
                    <img src={stadium} alt="" style={{ width: '100%' }} />

                    {/********** Animation for matches who going live ************/}
                    <div className={matchInfo.status === 'IN_PLAY' ? 'animated infinite flash slower' : null}>
                        <p className='home'>{matchInfo.match.status === 'SCHEDULED' ? '-' : matchInfo.match.score.fullTime.homeTeam}</p>
                        <p className='away'>{matchInfo.match.status === 'SCHEDULED' ? '-' : matchInfo.match.score.fullTime.awayTeam}</p>
                    </div>

                    {/********** Check match status **************/}
                    {halfTimeStatus(matchInfo.match.status)}
                </div>
            </div>
            <div className="head2head">
                <p className='stadium-name'>Stadium &rArr; {matchInfo.match.venue}</p>
                <span className='halfTime'>{matchInfo.match.score.halfTime.homeTeam === null ? '-' : matchInfo.match.score.halfTime.homeTeam}</span> &nbsp;
                    <span className='halfTime'>Half Time</span> &nbsp;
                    <span className='halfTime'>{matchInfo.match.score.halfTime.awayTeam === null ? '-' : matchInfo.match.score.halfTime.awayTeam}</span>

                <div className='numOfMatches'>
                    <h2>Stage</h2>
                    <span>{matchInfo.match.stage.replace(/_/g, ' ')}</span>
                </div>

                {/************ Head 2 Head **************/}
                <h2>Head 2 Head</h2>
                <div>
                    <span className='wins'>-</span> &nbsp;
                    <span>WINS</span> &nbsp;
                    <span className='wins'>-</span>
                </div>
                <div>
                    <span className='draws'>-</span> &nbsp;
                    <span>DRAWS</span> &nbsp;
                    <span className='draws'>-</span>
                </div>
                <div >
                    <span className='losses'>-</span> &nbsp;
                    <span>LOSSES</span> &nbsp;
                    <span className='losses'>-</span>
                </div>

                <div className='total-goals'>
                    <h2>Competition</h2>
                    <span>{matchInfo.match.competition.name}</span>
                </div>

                {/**********  Display Referees ***********/}
                <div className='referees'>
                    <h2>Referees</h2>
                    {matchInfo.match.referees ? matchInfo.match.referees.map((referee, index) => (
                        <span key={index}>{referee.name}</span>
                    )) : <span>--</span>}
                    {!matchInfo.match.referees.length ? <p>- 5 minutes before the match starts -</p> : null}
                </div>
            </div>

        </>
    )
}
