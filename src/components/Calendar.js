import React from 'react'
import DatePicker from 'react-date-picker';
import { IoIosFootball } from 'react-icons/io';


export const Calendar = ({ handleDate, date }) => {

    return (
        <div style={{ marginBottom: '10px', textAlign: 'end' }}>
            <DatePicker
                onChange={handleDate}
                value={date}
                clearIcon={null}
                className='calendar'
            />
        </div>
    )
}
