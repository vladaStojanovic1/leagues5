import React, { useState, useEffect } from 'react'
import { TeamInfo } from '../entities/TeamInfo';
import { ScorerInfo } from '../entities/ScorerInfo';
import { DisplayLeagueInfo } from '../components/DisplayLeagueInfo'
import { DisplayChampionsLeague } from '../components/DisplayChampionsLeague';
import { DisplayOtherCompetitions } from '../components/DisplayOtherCompetitions';
import { DisplayScorersStandings } from '../components/DisplayScorersStandings';
import { LoaderBounce } from '../components/loaderBounce/LoaderBounce';


export const LeagueInfo = ({ match }) => {

    /****** State ******/
    const [teams, setTeams] = useState([]);
    const [championsLeagueGroups, setChampionsLeagueGroups] = useState([]);
    const [scorersStandings, setScorersStandings] = useState([]);
    const [loading, setLoading] = useState(true);

    /****** State ******/

    useEffect(() => {
        const teamsStandings = async () => {
            const settings = {
                method: 'get',
                headers: {
                    'X-Auth-Token': localStorage.getItem('myToken')
                }
            }
            setLoading(true)
            const data = await fetch(`https://api.football-data.org/v2/competitions/${match.params.id}/standings`, settings);
            const res = await data.json();

            const teams = res.standings[0].table.map((team) => {
                return new TeamInfo(team)
            })
            const filterGroups = res.standings.filter((team) => {
                return team.type === 'TOTAL';
            })

            setChampionsLeagueGroups(filterGroups)
            setTeams(teams);
            setLoading(false)

        }

        const scorersStandings = async () => {
            const settings = {
                method: 'GET',
                headers: {
                    'X-Auth-Token': localStorage.getItem('myToken')
                }
            }
            const data = await fetch(`https://api.football-data.org/v2/competitions/${match.params.id}/scorers`, settings);
            const res = await data.json();

            const scorers = res.scorers.map((scorer) => {
                return new ScorerInfo(scorer)
            })
            setScorersStandings(scorers)
        }
        teamsStandings();
        scorersStandings();
    }, [])



    return (
        <>
            {/* Because is a diffrent data from API*/}
            {match.params.id === '2001' ?
                <div className='champion-league-content'>
                    {loading ? <LoaderBounce /> :
                        <div className='champion-league-divs'>
                            <DisplayChampionsLeague championsLeagueGroups={championsLeagueGroups} />
                            <DisplayScorersStandings scorersStandings={scorersStandings} />
                        </div>
                    }
                </div>
                :
                <div className='other-leagues-content'>
                    {loading ? <LoaderBounce /> :
                        <div className='other-leagues-divs'>
                            <DisplayOtherCompetitions teams={teams} />
                            <DisplayScorersStandings scorersStandings={scorersStandings} />
                        </div>
                    }
                </div>
            }
        </>
    )
}

