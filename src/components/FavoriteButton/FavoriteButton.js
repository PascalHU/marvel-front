import "./FavoriteButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavoriteButton = ({ id, user, changeFavorite, page }) => {
  return (
    <>
      {user.favorites.character[id] || user.favorites.comic[id] ? (
        <div
          className="remove-favorite"
          onClick={(event) => {
            event.preventDefault();
            changeFavorite("remove", page, id);
          }}
        >
          <FontAwesomeIcon icon="heart-crack" />
        </div>
      ) : (
        <div
          className="add-favorite"
          onClick={(event) => {
            event.preventDefault();
            changeFavorite("add", page, id);
          }}
        >
          <FontAwesomeIcon icon="heart" />
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
