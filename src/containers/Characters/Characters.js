import "./Characters.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Character from "../../components/Character/Character";
import ChangePage from "../../components/ChangePage/ChangePage";

const Characters = ({ search }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [nbElement, setNbElement] = useState();
  const page = [];

  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://marvel-backend-ph.herokuapp.com/characters?page=${actualPage}&name=${search}`
      );
      setData(response.data.results);
      setNbElement(response.data.count);
      setIsLoading(false);
    };
    searchData();
  }, [actualPage, search]);

  const maxPage = Math.ceil(nbElement / 100);
  for (let i = 1; i <= maxPage; i++) {
    page.push(i);
  }
  return isLoading ? (
    <span>Loading ...</span>
  ) : (
    <div className="characters container">
      <div className="page">
        <ChangePage
          page={page}
          setActualPage={setActualPage}
          actualPage={actualPage}
          maxPage={maxPage}
        />
      </div>
      <div className="characters-list">
        {data.map((data) => {
          return <Character key={data._id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
