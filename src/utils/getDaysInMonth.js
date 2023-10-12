export function getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startingWeekDay = firstDay.getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const daysArray = [];

    for (let i = startingWeekDay; i > 0; i--) {
        const prevMonthDay = new Date(year, month, 0).getDate() - (i - 1);
        daysArray.push({
            day: prevMonthDay,
            month: month - 1,
            year: year,
        });
    }

    for (let i = 1; i <= lastDay; i++) {
        daysArray.push({
            day: i,
            month,
            year: year,
        });
    }

    let nextMonthStartingWeekDay = (startingWeekDay + lastDay) % 7;
    for (let i = 1; nextMonthStartingWeekDay < 7; i++) {
        if (nextMonthStartingWeekDay === 0) {
            break;
        }
        daysArray.push({
            day: i,
            month: month + 1,
            year: year,
        });
        nextMonthStartingWeekDay++;
    }

    return daysArray;
};
