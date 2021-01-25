export const getTodaysDateTime = () => {
    const dateTime = new Date();
    const date = dateTime.toDateString();
    let time = {
        hours: dateTime.getHours(),
        minutes: dateTime.getMinutes(),
        // seconds: dateTime.getSeconds(),
        meridian:'AM'};
    if (time.hours >= 12){
        time.meridian = 'PM';
        if (time.hours > 12)
            {time.hours -= 12;}
    }
    if (time.hours < 10)
    {
        time.hours = '0' + time.hours;
    }
    if (time.minutes < 10)
    {
        time.minutes = '0' + time.minutes;
    }
    // if (time.seconds < 10)
    // {
    //     time.seconds = '0' + time.seconds;
    // }
    time = `${time.hours}:${time.minutes} ${time.meridian}`;
    return {date, time};
};
