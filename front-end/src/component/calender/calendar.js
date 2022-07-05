import React, { useEffect, useState } from "react";
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import axios from "axios";
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

//use redux her to get all auctions from DB.

function Calendar() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/auctions")
      .then((result) => {
        setEvent(result.data.result);
      })
      .catch((err) => {});
  }, []);

  const events = event.map((elem, i) => {
    return {
      allDay: true,
      title: elem.title,
      bgColor: "#" + Math.floor(Math.random() * 2557219).toString(16),
      start: moment(elem.start_date).format("YYYY-MM-DDTHH:mm:ss.SSS"),
      end: moment(elem.end_date).format("YYYY-MM-DDTHH:mm:ss.SSS"),
    };
  });

  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        margin: "8rem 5rem 3rem 12rem",
        overflow: "hidden",
        backgroundColor: "rgb(240,189,85)",

        borderRadius: "5px",
      }}
    >
      <h1 className=" text-center text-muted ">Auctions Scheduler</h1>
      <BigCalendar
        selectable
        events={events}
        defaultView="month"
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={(slotInfo) =>
          alert(
            `selected auction: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
          )
        }
      />
    </div>
  );
}

export default Calendar;
