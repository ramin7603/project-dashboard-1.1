import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="App" title="Calendar"/>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
          <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6}   />
        </LocalizationProvider>
     
    </div>
  );
};

export default Calendar;
