import "./Favorites.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Character from "../../components/Character/Character";
import Comic from "../../components/Comic/Comic";
const Favorites = ({ user, changeFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const searchData = async () => {
      try {
        const response = await axios.post(
          "https://marvel-backend-ph.herokuapp.com/findfavorites",
          {
            list: user.favorites,
            userId: user._id,
          }
        );
        setCharacters(response.data.characters);

        setComics(response.data.comics);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    searchData();
  }, [user._id, user.favorites]);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div className="favorites-page container">
      {characters.length > 0 && (
        <div className="favorite-category">
          <h2>Vos Héros Favoris</h2>
          <div className="favorites-list">
            {characters.map((character) => {
              return (
                <Character
                  key={character._id}
                  data={character}
                  user={user}
                  changeFavorite={changeFavorite}
                />
              );
            })}
          </div>
        </div>
      )}

      {comics.length > 0 && (
        <div className="favorite-category">
          <h2>Vos Comics Favoris</h2>
          <div className="favorites-list">
            {comics.map((comic) => {
              return (
                <Comic
                  key={comic._id}
                  comic={comic}
                  user={user}
                  changeFavorite={changeFavorite}
                />
              );
            })}
          </div>
        </div>
      )}
      {characters.length === 0 && comics.length === 0 && (
        <div className="no-favorite favorite-category">
          <h2>
            <span>🚀😭</span> Vous n'avez aucun favoris<span>😭🚀</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
