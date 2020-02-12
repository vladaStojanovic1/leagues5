import React from 'react'
import { LeaguesLinks } from '../../components/leagueLinks/LeaguesLinks';
import { MatchesResults } from '../matchesResults/MatchesResults';
import { MyCarousel } from '../myCarousel/MyCarousel';
import { BestPlayers } from '../bestPlayers/BestPlayers';


export const Container = () => {

    return (
        <div>
            <div className='container-content'>
                <LeaguesLinks />
                <MatchesResults />
            </div>
            <MyCarousel />
            <BestPlayers />
        </div>
    )
}
