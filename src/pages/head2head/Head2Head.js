import React, { useState, useEffect } from 'react'
import { requestHeader } from '../../components/requestHeader';
import { MatchInfo } from '../../entities/MatchInfo';
import { DisplayHead2Head } from '../../components/displayHead2Head/DisplayHead2Head';
import { LoaderBounce } from '../../components/loaderBounce/LoaderBounce';

export const Head2Head = ({ match }) => {

    const [matchInfo, setMatchInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMatchInfo = async () => {
            setLoading(true)
            const data = await fetch(`https://api.football-data.org/v2/matches/${match.params.id}`, requestHeader)
            const res = await data.json();

            const matchInfo = new MatchInfo(res)
            setMatchInfo(matchInfo)
            setLoading(false)
        }
        getMatchInfo()
    }, [])


    return (
        <div style={{ minHeight: '100vh' }}>
            {loading ? <LoaderBounce /> : <DisplayHead2Head matchInfo={matchInfo} />}
        </div>
    )
}