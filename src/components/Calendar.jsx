import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: '',
    start: new Date(),
    end: new Date(),
    allDay: false,
  },
];

const Calendar = () => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Calendar</h1>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">+ Schedule Session</button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
