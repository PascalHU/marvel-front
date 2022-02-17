import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({ data }) => {
  return (
    <Link to="/character/" state={{ id: data._id }} className="character-card">
      <img
        className={
          data.thumbnail.path.includes("not_available")
            ? "img-not-available-left"
            : data.thumbnail.extension.includes("gif")
            ? "img-not-available-right"
            : ""
        }
        src={data.thumbnail.path + "." + data.thumbnail.extension}
        alt={data.name}
      />
      <div className="character-detail">
        <span>{data.name}</span>
        <p>{data.description}</p>
      </div>
    </Link>
  );
};
export default Character;
