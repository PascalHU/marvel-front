import axios from "axios";
import { useState, useEffect } from "react";
import ChangePage from "../../components/ChangePage/ChangePage";

import Character from "../../components/Character/Character";
import "./Characters.css";

const Characters = ({ search, user, changeFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const searchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-ph.herokuapp.com/characters?page=${actualPage}&name=${search}`
      );
      setData(response.data.results);
      setMaxPage(Math.ceil(Number(response.data.count) / 100));
      setIsLoading(false);
    };
    searchData();
  }, [actualPage, search]);

  return isLoading ? (
    <span>Loading ...</span>
  ) : (
    <div className="characters container">
      <div className="page">
        <ChangePage
          actualPage={actualPage}
          setActualPage={setActualPage}
          maxPage={maxPage}
        />
      </div>
      <div className="characters-list">
        {data.map((data) => {
          return (
            <Character
              key={data._id}
              data={data}
              user={user}
              changeFavorite={changeFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
