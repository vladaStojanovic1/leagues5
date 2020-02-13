import React from 'react'
import { LeaguesLinks } from '../../components/leagueLinks/LeaguesLinks';
import { MatchesResults } from '../../components/matchesResults/MatchesResults';
import { MyCarousel } from '../../components/myCarousel/MyCarousel';
import { BestPlayers } from '../../components/bestPlayers/BestPlayers';


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
