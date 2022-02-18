import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Link } from "react-router-dom";
import "./Comic.css";

const Comic = ({ comic, user, changeFavorite }) => {
  return (
    <Link to="/comic" state={{ id: comic._id }} className="comic-card">
      <div className="img">
        <img
          className={
            comic.thumbnail.path.includes("not_available")
              ? "img-not-available-left"
              : comic.thumbnail.extension.includes("gif")
              ? "img-not-available-right"
              : ""
          }
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={comic.title}
        />
        <FavoriteButton
          id={comic._id}
          user={user}
          changeFavorite={changeFavorite}
          page={"comic"}
        />
      </div>
      <div className="comic-card-title-description">
        <h3>{comic.title}</h3>
        <p>{comic.description}</p>
      </div>
    </Link>
  );
};
export default Comic;
