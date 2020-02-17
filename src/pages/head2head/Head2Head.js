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
            const response = await fetch(`https://api.football-data.org/v2/matches/${match.params.id}`, requestHeader)
            const data = await response.json();
            console.log(data.head2head);

            const matchInfo = !data.head2head ? data : new MatchInfo(data)
            setMatchInfo(matchInfo)
            setLoading(false)
        }
        getMatchInfo()
    }, [match.params.id])

    console.log(matchInfo);

    return (
        <div className='head2head-section'>
            {loading ? <LoaderBounce /> : <DisplayHead2Head matchInfo={matchInfo} />}
        </div>
    )
}