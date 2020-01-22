import React, { createContext, useState, useEffect } from 'react';

export const CompetitionContext = createContext();

export const CompetitionProvider = (props) => {


    useEffect(() => {

        const italiLeague = async () => {
            let settings = {
                method: 'GET',
                headers: {
                    'X-Auth-Token': '70369ad901764f939fa1d166e7871eb3',
                }
            }
            try {
                const data = await fetch('https://api.football-data.org/v2/competitions/2019/standings', settings);
                const res = await data.json();
                console.log(res);
                return res;
            } catch (error) {
                console.log(error);
            }
        }
        italiLeague();
    }, [])




    return (
        <CompetitionContext.Provider value={'proba'}>
            {props.children}
        </CompetitionContext.Provider>
    )
}
