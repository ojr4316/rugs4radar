import React, { useState } from "react";
import "./App.css";
import { news } from "./fillOut";
import Team from "./Team";
import Week from "./Week";

function getPageContents(page: string) {
  switch (page) {
    case "home":
      return (
        <div style={{ width: "40%", marginTop: "32px" }}>
          <p className="page-title">Project Description</p>
          <p className="page-text">
            1) The TDA4VM board from Texas Instruments is confirmed to work with
            ROS Our project with D3 engineering has a MVP the scope of it is as
            follows: 2. Our first task is to follow the documentation to
            replicate this set up. The most general overview of this system is
            the TI board running ROS 2 and an external PC also running ROS 2.
            These 2 communicate through SSH.
          </p>
          <p className="page-text">
            2) The functionality of system using the TI board needs to be
            documented so that the behavior can be replicated latter on.
          </p>
          <p className="page-text">
            3) D3's product uses the same micro chip as the TI board but the pcb
            is different. The functionally of the system when using the TI board
            needs to be replicated on the system when using the D3 board. To do
            this a branch of ROS 2 will be made.
          </p>
          <p className="page-text">
            There are more goals in the project but replicating the behavior of
            the TI board for the D3 board is the MVP of the project and they
            will be addressed at a later date if at all.
          </p>

          <p className="page-title" style={{ marginTop: "48px" }}>
            Project Tags
          </p>
          <p className="page-text">
            Robotics, Vision, AI, Docker, Embedded Systems
          </p>
        </div>
      );
    case "news":
      return news;
    case "week":
      return <Week />;
    case "team":
      return <Team />;
    default:
      return <p> Error! </p>;
  }
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="page-container">
      <div className="senior-project-header" onClick={() => setPage("home")}>
        <p> RIT </p>
        <p> Rugs4Radar </p>
        <p> SE Senior Project </p>
      </div>

      <div className="nav">
        <div onClick={() => setPage("home")}>
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

      <div className="page-content">{getPageContents(page)}</div>
    </div>
  );
}
