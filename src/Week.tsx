import {
  buildHours,
  currentFourUp,
  getRecentHours,
  getTotalHours,
} from "./fillOut";
import { useState } from "react";
import "./Hours.css";
//go to the current week, hit update hours, inspect, console, copy the object and paste it here
const cacheHours: any = [
  {
    "3": "6",
    "4": "8",
    "5": "2",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "Week": "Samantha"
  },
  {
    "3": "9",
    "4": "9",
    "5": "7",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "Week": "Owen"
  },
  {
    "3": "6",
    "4": "10",
    "5": "10",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "Week": "Ash"
  },
  {
    "3": "7",
    "4": "7",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "Week": "Will"
  },
  {
    "3": "5",
    "4": "6",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "Week": "Zach"
  }
];

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
