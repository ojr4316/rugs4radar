import "./Team.css";

export default function Team() {
  return (
    <div className="team">
      <div className="team-member">
        <img src={require("./images/placeholder.png")} alt="" className="team-image" />
        <div>
          <h3>Ash Thompson</h3>
          <h4>Sponsor Communication Lead </h4>
        </div>
      </div>
      <div className="team-member">
        <img src={require("./images/owen.JPG")} alt="" className="team-image" />
        <div>
          <h3>Owen Racette</h3>
          <h4>Project Manager </h4>
        </div>
      </div>
      <div className="team-member">
        <img src={require("./images/placeholder.png")} alt="" className="team-image" />
        <div>
          <h3>Samantha Appelbaum</h3>
          <h4>Git Czar</h4>
        </div>
      </div>
      <div className="team-member">
        <img src={require("./images/placeholder.png")} alt="" className="team-image" />
        <div>
          <h3>William Dabney</h3>
          <h4>Scrum Master</h4>
        </div>
      </div>
      <div className="team-member">
        <img src={require("./images/placeholder.png")} alt="" className="team-image" />
        <div>
          <h3>Zachary Eckhardt</h3>
          <h4>Documentation</h4>
        </div>
      </div>
    </div>
  );
}
