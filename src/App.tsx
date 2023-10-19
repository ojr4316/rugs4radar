import React, { useState } from "react";
import "./App.css";
import { news } from "./fillOut";
import Team from "./Team";
import Week from "./Week";

function getPageContents(page: string) {
  switch (page) {
    case "home":
      return (
        <div style={{ width: "80%", maxWidth: "600px", marginTop: "16px" }}>
          <p className="page-title">Project Description</p>

          <p className="page-text">
            Our project concerns enabling the Robot Operating System (ROS 2) to
            run on a new robotics motherboard produced by D3 Engineering. To
            begin, the TDA4VM board from Texas Instruments must be confirmed to
            work with ROS.
          </p>
          <p className="page-text">
            Our first task is to follow the documentation to replicate this set
            up. The most general overview of this system is the TI board running
            ROS 2 for data acquisition and direct robot control and an external
            PC also running ROS 2 for visualization and remote control. These
            two systems will communicate via SSH. The functionality of the
            system using TI's board should be documented so the behavior can be
            replicated in the future. D3's proprietary board uses the same
            processor on a different circuit board, so this information will
            enable the development of an MVP.
          </p>
          <p className="page-text">
            The MVP of our project with D3 Engineering is as follows: ROS 2 and
            the Robotics SDK from TI must both function and be able to read
            input/output from the D3 proprietary board. To do this, a custom
            deployment pipeline for the proprietary board will be necessary.
          </p>
          <p className="page-text">
            If the MVP is achieved, we plan to validate the MVP by enabling
            video and radar readout to an external controller.
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
