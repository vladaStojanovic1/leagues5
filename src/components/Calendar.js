import React from 'react'
import DatePicker from 'react-date-picker';
import { GoCalendar } from 'react-icons/go';
import calendar from '../img/calendar.png'

export const Calendar = ({ handleDate, date }) => {

    return (
        <div style={{ marginBottom: '10px', textAlign: 'end' }}>
            <DatePicker
                onChange={handleDate}
                value={date}
                clearIcon={null}
                className='calendar'
                calendarIcon={<img src={calendar} alt='sa' style={{ width: '30px' }} />}
            />
        </div>
    )
}
