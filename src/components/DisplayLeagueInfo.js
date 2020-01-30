import React from 'react'
import { DisplayChampionsLeague } from './DisplayChampionsLeague';
import { DisplayOtherCompetitions } from './DisplayOtherCompetitions';

export const DisplayLeagueInfo = ({ scorers, teamsStandings }) => {

    const checkLeagues = (stage) => {

        if (stage === 'GROUP_STAGE') {
            return <DisplayChampionsLeague teamsStandings={teamsStandings} />
        } else {
            return <DisplayOtherCompetitions teamsStandings={teamsStandings} />
        }

    }

    return (
        <div>
            {teamsStandings.map((check) => {
                checkLeagues(check.stage)
            })}

        </div>
    )
}
