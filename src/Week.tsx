import {
  buildHours,
  currentFourUp,
  getRecentHours,
  getTotalHours,
} from "./fillOut";
import { useState } from "react";
import "./Hours.css";

const cacheHours: any = [
  {
    Week: "Samantha",
    "3": "6",
    "4": "",
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
  },
  {
    Week: "Owen",
    "3": "4",
    "4": "",
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
  },
  {
    Week: "Ash",
    "3": "2",
    "4": "",
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
  },
  {
    Week: "Will",
    "3": "6",
    "4": "",
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
  },
  {
    Week: "Zack",
    "3": "1.5",
    "4": "",
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
  },
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
