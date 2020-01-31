import React from 'react'
import { LeaguesLinks } from './LeaguesLinks';
import { MatchesResults } from './MatchesResults';


export const Container = () => {

    return (
        <div className='container-content'>
            <LeaguesLinks />
            <MatchesResults />
        </div>
    )
}
