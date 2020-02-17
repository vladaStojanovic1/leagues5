import React, { useState, useEffect } from 'react'
import { requestHeader } from '../../components/requestHeader';
import { TeamInfo } from '../../entities/TeamInfo';
import { ScorerInfo } from '../../entities/ScorerInfo';
import { DisplayChampionsLeague } from '../../components/displayChampionsLeague/DisplayChampionsLeague';
import { DisplayOtherCompetitions } from '../../components/displayOtherCompetitions/DisplayOtherCompetitions';
import { DisplayScorersStandings } from '../../components/displayScorersStandings/DisplayScorersStandings';
import { LoaderBounce } from '../../components/loaderBounce/LoaderBounce';


export const LeagueInfo = ({ match }) => {

    /****** State ******/
    const [teams, setTeams] = useState([]);
    const [championsLeagueGroups, setChampionsLeagueGroups] = useState([]);
    const [scorersStandings, setScorersStandings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [competitionName, setCompetitionName] = useState('');
    /****** State ******/

    useEffect(() => {

        /************ League Standings Data *************/
        const teamsStandings = async () => {
            setLoading(true)
            const response = await fetch(`https://api.football-data.org/v2/competitions/${match.params.id}/standings`, requestHeader);
            const data = await response.json();

            const teams = data.standings[0].table.map((team) => {
                return new TeamInfo(team)
            })
            const filterGroups = data.standings.filter((team) => {
                return team.type === 'TOTAL';
            })
            setChampionsLeagueGroups(filterGroups)
            setTeams(teams);
            setCompetitionName(data.competition.name);
            setLoading(false)
        }

        /************ Scorer Standings Data *************/
        const scorersStandings = async () => {
            const response = await fetch(`https://api.football-data.org/v2/competitions/${match.params.id}/scorers`, requestHeader);
            const data = await response.json();

            const scorers = data.scorers.map((scorer) => {
                return new ScorerInfo(scorer)
            })
            setScorersStandings(scorers)
        }
        teamsStandings();
        scorersStandings();
    }, [match.params.id])


    return (
        <>
            {/* Because is a diffrent data from API*/}
            {match.params.id === '2001' ?
                <div className='champion-league-content'>
                    {loading ? <LoaderBounce /> :
                        <div className='champion-league-divs'>
                            <DisplayChampionsLeague
                                championsLeagueGroups={championsLeagueGroups}
                                competitionName={competitionName}
                            />
                            <DisplayScorersStandings
                                scorersStandings={scorersStandings}
                                competitionName={competitionName}
                            />
                        </div>
                    }
                </div>
                :
                <div className='other-leagues-content'>
                    {loading ? <LoaderBounce /> :
                        <div className='other-leagues-divs'>
                            <DisplayOtherCompetitions
                                teams={teams} competitionName={competitionName} />
                            <DisplayScorersStandings
                                scorersStandings={scorersStandings}
                                competitionName={competitionName}
                            />
                        </div>
                    }
                </div>
            }
        </>
    )
}
