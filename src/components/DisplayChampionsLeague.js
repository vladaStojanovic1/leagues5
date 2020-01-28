import React from 'react'

export const DisplayChampionsLeague = ({ championsLeagueGroups }) => {

    return (
        <>
            {championsLeagueGroups.map((group) => {
                console.log(group)
            })}
        </>
    )
}
