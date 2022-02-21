import axios from "axios";
import { useState, useEffect } from "react";
import ChangePage from "../../components/ChangePage/ChangePage";
import Character from "../../components/Character/Character";
import "./Characters.css";
// import { Autocomplete } from "@mui/material";

const Characters = ({
  search,
  setSearch,
  user,
  changeFavorite,
  charactersList,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    const searchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-ph.herokuapp.com/characters?page=${actualPage}&name=${encodeURIComponent(
          search
        )}`
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
      {/* <Autocomplete
        options={charactersList}
        getOptionLabel={(opt) => opt.name}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="Autocomplete searchbar (not working due to special case)"
              autoFocus={true}
              className="searchbar"
              onChange={(event) => {
                console.log(event);
                setSearch(event.target.value);
              }}
            />
          </div>
        )}
      /> */}
      <input
        className="searchbar"
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
        placeholder="Rechercher ... "
      />
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
      <div className="page">
        <ChangePage
          actualPage={actualPage}
          setActualPage={setActualPage}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
};

export default Characters;
