import { PostType } from "./fillOut";
import "./Post.css";

type Props = {
  data: PostType;
};

export default function Post(props: Props) {
  return (
    <div className="post">
      <p className="post-date">
        {props.data.date.toLocaleDateString("en-us", { dateStyle: "full" })}
      </p>
      <img
        src={props.data.image}
        className="post-image"
        alt={props.data.description}
      />
      <p className="post-text">{props.data.description}</p>
    </div>
  );
}
