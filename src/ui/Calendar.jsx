import React, { useState, useEffect } from 'react';
import { getDaysInMonth } from '../utils/dateUtils';
import ArrowButton from './ArrowButton';
import './calendar.scss';

const weekdays = new Array(7).fill(0).map((_, i) => {
    const date = new Date(2023, 0, i + 1);
    return date.toLocaleString('en-US', { weekday: 'short' });
});

export default function Calendar({ selectedDate, onChangeDate, isCalendarOpen, onSetIsCalendarOpen }) {
    const [displayedDate, setDisplayedDate] = useState(selectedDate);

    const handlePrevMonth = () => {
        const prevMonth = new Date(displayedDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setDisplayedDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(displayedDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setDisplayedDate(nextMonth);
    };

    const handleDayClick = (day, month) => {
        const newDate = new Date(displayedDate);
        newDate.setDate(day);
        newDate.setMonth(month);
        onChangeDate(newDate);
        onSetIsCalendarOpen(false);
    };

    useEffect(() => {
        setDisplayedDate(selectedDate);
    }, [selectedDate]);

    return (
        <div className={`calendar ${isCalendarOpen ? 'calendar--open' : ''}`}>
            <div className='calendar__header'>
                <ArrowButton direction={'left'} onClickFunction={handlePrevMonth} />
                <div className='calendar__month'>
                    {displayedDate.toLocaleString('en-US', { month: 'long' })}{' '}
                    {displayedDate.getFullYear()}
                </div>
                <ArrowButton direction={'right'} onClickFunction={handleNextMonth} />
            </div>
            <div className='calendar__weekdays'>
                {weekdays.map((day) => (
                    <div key={day} className='calendar__weekday'>
                        {day}
                    </div>
                ))}
            </div>
            <div className='calendar__days'>
                {getDaysInMonth(displayedDate).map(({ day, month, year }, index) => (
                    <button
                        key={index}
                        className={`calendar__day ${
                            day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()
                            ? 'calendar__day--selected'
                            : ''
                        } ${month !== displayedDate.getMonth() ? 'calendar__day--outside-current-month' : ''}`}
                        onClick={() => handleDayClick(day, month)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
};
