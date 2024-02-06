import "./FourUp.css";
import { fourUp } from "./fillOut";

type Props = {
  data: fourUp;
};

export default function FourUp(props: Props) {
  return (
    <div className="fourUp">
      <p className="fourUp-date">
        Weekly FourUp for{" "}
        {props.data.for.toLocaleDateString("en-us", { dateStyle: "full" })}
      </p>
      <div className="fourUp-grid">
        <div className="fourUp-cell">
          <p className="fourUp-header">Progress</p>
          {props.data.progress.map((p: string, i) => (
            <p className="fourUp-text" key={i}>- {p}</p>
          ))}
        </div>
        <div className="fourUp-cell">
          <p className="fourUp-header">Risks</p>
          {props.data.risks.map((p: string, i) => (
            <p className="fourUp-text" key={i}>- {p}</p>
          ))}
        </div>
        <div className="fourUp-cell">
          <p className="fourUp-header">Plans</p>

          {props.data.plans.map((p: string, i) => (
            <p className="fourUp-text" key={i}>- {p}</p>
          ))}
        </div>
        <div className="fourUp-cell">
          <p className="fourUp-header">Needs</p>

          {props.data.needs.map((p: string, i) => (
            <p className="fourUp-text" key={i}>- {p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
