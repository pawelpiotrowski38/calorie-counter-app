import { useEffect, useRef, useState } from 'react';
import { addDays, subDays } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import ArrowButton from './ArrowButton';
import Calendar from './Calendar';
import './datePicker.scss';

export default function DatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const datePickerRef = useRef(null);

    const handleIncrementDate = function() {
        setSelectedDate(addDays(selectedDate, 1));
    };
  
    const handleDecrementDate = function() {
        setSelectedDate(subDays(selectedDate, 1));
    };

    const handleToggleCalendar = function() {
        setIsCalendarOpen((open) => !open);
    }

    useEffect(() => {
        const handleClickOutside = function(event) {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setIsCalendarOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [datePickerRef]);
      
    return (
        <div ref={datePickerRef} className='date-picker'>
            <ArrowButton direction={'left'} onClickFunction={handleDecrementDate} />
            <div className='date-picker__date-container'>
                <p className='date-picker__date'>
                    {selectedDate.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div className='date-picker__icon-container'>
                    <AiOutlineCalendar
                        size='1.5rem'
                        className='date-picker__icon'
                        onClick={handleToggleCalendar}
                    />
                </div>
            </div>
            <ArrowButton direction={'right'} onClickFunction={handleIncrementDate} />
            {isCalendarOpen && (
                <Calendar
                    selectedDate={selectedDate}
                    onChangeDate={setSelectedDate}
                    isCalendarOpen={isCalendarOpen}
                    onSetIsCalendarOpen={setIsCalendarOpen}
                />
            )}
        </div>
    );
}