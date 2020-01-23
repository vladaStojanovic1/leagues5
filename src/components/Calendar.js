import React from 'react'
import DatePicker from 'react-date-picker';


export const Calendar = ({ handleDate, date }) => {

    return (
        <div style={{ marginBottom: '10px', textAlign: 'end' }}>
            <DatePicker
                onChange={handleDate}
                value={date}
                clearIcon={null}
                className='calendar' />
        </div>
    )
}
