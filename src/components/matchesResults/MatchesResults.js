import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { TableResults } from '../TableResults';
import { LoaderClock } from '../clockLoader/LoaderClock';
import { requestHeader } from '../requestHeader';

export const MatchesResults = () => {


    /******* State *******/
    const [matches, setMatches] = useState([]);
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(true);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [matchesPerPage] = useState(10);
    /******* State *******/

    useEffect(() => {
        const currentDay = moment(date).format('YYYY-MM-DD');
        let mounted = true;

        const fetchMatches = async () => {
            setLoading(true);
            const data = await fetch(`https://api.football-data.org/v2/matches?dateFrom=${currentDay}&dateTo=${currentDay}`, requestHeader);
            const res = await data.json();

            if (mounted) {
                setMatches(res.matches);
                setLoading(false);
            }
        }
        fetchMatches();

        return () => {
            mounted = false;
        }
    }, [date])


    /*** Date Picker ***/
    const handleDate = (e) => {
        setDate(e);
    }
    /*** Date Picker ***/

    /*** Pagination ***/
    const indexOfLastMatches = currentPage * matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatches - matchesPerPage;
    const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatches);
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    let matchesLength = matches.length;
    /*** Pagination ***/


    return (
        <div >

            {loading ? <LoaderClock
            /> :
                <>
                    <TableResults
                        currentMatches={currentMatches}
                        handleDate={handleDate}
                        date={date}
                        matchesPerPage={matchesPerPage}
                        matchesLength={matchesLength}
                        paginate={paginate}
                    />
                </>
            }
        </div>
    )
}
