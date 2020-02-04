import React from 'react'
import { LeaguesLinks } from './LeaguesLinks';
import { MatchesResults } from './MatchesResults';
import { MyCarousel } from './myCarousel/MyCarousel';
import { BestPlayers } from './bestPlayers/BestPlayers';


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
