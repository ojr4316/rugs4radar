import React, { useState } from "react";
import "./App.css";
import { news } from "./fillOut";
import Team from "./Team";
import Week from "./Week";


function getPageContents(page: string) {
  switch (page) {
    case "news": 
      return news;
    case "week":
      return <Week/>;
    case "team":
      return <Team/>;
    default:
      return <p> Error! </p>
  }
}

export default function App() {
  const [page, setPage] = useState("news");

  return (
    <div className="page-container">
      <div className="senior-project-header">
        <p> RIT </p>
        <p> Rugs4Radar </p>
        <p> SE Senior Project </p>
      </div>

      <div className="nav">
        <div>
          <h4 className="page-subtitle">D3 Engineering -</h4>
          <h3 className="page-title"> Rugged Vision and Radar Platform</h3>
        </div>
        <div className="nav-options">
          <p
            style={{ color: page === "news" ? "#3cb371" : "#eae1df" }}
            onClick={() => setPage("news")}
          >
            Project News
          </p>
          <p
            style={{ color: page === "week" ? "#3cb371" : "#eae1df" }}
            onClick={() => setPage("week")}
          >
            Current Week
          </p>
          <p
            style={{ color: page === "team" ? "#3cb371" : "#eae1df" }}
            onClick={() => setPage("team")}
          >
            Meet the Team
          </p>
        </div>
      </div>

      <div className="page-content">
        {getPageContents(page)}
      </div>
    </div>
  );
}