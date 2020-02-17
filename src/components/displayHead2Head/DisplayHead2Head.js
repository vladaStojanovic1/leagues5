import React from 'react'
import { OtherMatches } from './OtherMatches';
import { ChampionsLeagueMatches } from './ChampionsLeagueMatches';

export const DisplayHead2Head = ({ matchInfo }) => {


    // Check match status
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
            {/* Champions League data API not has head2head statistic*/}
            {matchInfo.head2head === null
                ?
                <ChampionsLeagueMatches matchInfo={matchInfo} halfTimeStatus={halfTimeStatus} />
                :
                <OtherMatches matchInfo={matchInfo} halfTimeStatus={halfTimeStatus} />
            }
        </div>
    )
}
