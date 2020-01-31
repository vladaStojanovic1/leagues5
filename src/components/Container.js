import React from 'react'
import { LeaguesLinks } from './LeaguesLinks';
import { MatchesResults } from './MatchesResults';


export const Container = ({ match }) => {
    console.log(match);

    return (
        <div className='container-content'>
            <LeaguesLinks />
            <MatchesResults />
        </div>
    )
}
