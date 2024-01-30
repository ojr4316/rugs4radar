import {
  currentFourUp,
  cacheHours
} from "./fillOut";
import { useState } from "react";
import "./Hours.css";

export function getRecentHours(hrs: any) {
  let currentWeek = 30;
  while (!hrs[0][currentWeek]) {
    currentWeek--;
  }

  let hours: any = {};
  hrs.forEach((c: any) => {
    const name = c.Week;
    hours[name] = c[currentWeek.toString()];
  });
  return hours;
}

export function getTotalHours(hrs: any) {
  let hours: any = {};
  hrs.forEach((c: any) => {
    const name = c.Week;
    let total = 0;
    for (let week in c) {
      if (week !== "Week" && c[week]) {
        total += parseFloat(c[week]);
      }
    }
    hours[name] = total;
  });
  return hours;
}

export function buildHours(hours: any, label = "Recent Hours") {
  let tsx = [<p className="hours-label">{label}</p>];
  for (let h in hours) {
    if (hours[h] > 0) {
      tsx.push(
        <p className="hours-text">
          {h} - {hours[h]} hours
        </p>
      );
    } else {
      tsx.push(<p className="hours-text" key={h}>{h} - None this week</p>);
    }
  }
  return tsx.map((e, i) => <div key={i}>{e}</div>);
}

export default function Week() {
  const [hours, setHours] = useState(cacheHours);
  async function updateHours() {
    const response = await fetch("https://sheetdb.io/api/v1/knu1xburdgrat");
    let h = await response.json();
    console.log(h);
    setHours(h);
  }

  return (
    <>
      {currentFourUp}
      {buildHours(getRecentHours(hours))}
      {buildHours(getTotalHours(hours), "Total Hours")}
      <button onClick={updateHours} className="hours-button">Update Hours*</button>
      <p className="hours-note">
        * We are using a free API to pull our hour data from a Google Sheet.
        (Please don't refresh a lot!)
      </p>
    </>
  );
}
