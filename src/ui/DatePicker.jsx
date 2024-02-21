import { useState, useRef } from 'react';
import { addDays, subDays } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import useClickOutside from '../hooks/useClickOutside';
import ArrowButton from './ArrowButton';
import Calendar from './Calendar';
import './datePicker.scss';

export default function DatePicker({ selectedDate, onSetSelectedDate }) {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const datePickerRef = useRef(null);

    const handleIncrementDate = function() {
        onSetSelectedDate(addDays(selectedDate, 1));
    };
  
    const handleDecrementDate = function() {
        onSetSelectedDate(subDays(selectedDate, 1));
    };

    const handleToggleCalendar = function() {
        setIsCalendarOpen((open) => !open);
    }

    useClickOutside(datePickerRef, () => {
        setIsCalendarOpen(false)
    });
      
    return (
        <div ref={datePickerRef} className='date-picker'>
            <ArrowButton direction={'left'} onClickFunction={handleDecrementDate} />
            <div className='date-picker__date-container'>
                <p className='date-picker__date'>
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <button className='date-picker__calendar-button' onClick={handleToggleCalendar}>
                    <AiOutlineCalendar
                        size='24px'
                        className='date-picker__calendar-icon'
                    />
                </button>
            </div>
            <ArrowButton direction={'right'} onClickFunction={handleIncrementDate} />
            {isCalendarOpen && (
                <Calendar
                    selectedDate={selectedDate}
                    onChangeDate={onSetSelectedDate}
                    isCalendarOpen={isCalendarOpen}
                    onSetIsCalendarOpen={setIsCalendarOpen}
                />
            )}
        </div>
    );
}