import "./Comics.css";
import Comic from "../../components/Comic/Comic";
import { useState, useEffect } from "react";
import axios from "axios";
import ChangePage from "../../components/ChangePage/ChangePage";
// import { Autocomplete } from "@mui/material";

const Comics = ({ search, setSearch, user, changeFavorite, comicsList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [nbElement, setNbElement] = useState();

  useEffect(() => {
    const searchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-ph.herokuapp.com/comics?page=${actualPage}&title=${encodeURIComponent(
          search
        )}`
      );
      setNbElement(response.data.count);
      setData(response.data.results);
      setIsLoading(false);
    };
    searchData();
  }, [actualPage, search]);

  const maxPage = Math.ceil(nbElement / 100);

  return isLoading ? (
    <span>Loading ...</span>
  ) : (
    <div className="comics-page container">
      {/* <Autocomplete
        options={comicsList}
        getOptionLabel={(opt) => opt.title}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="Autocomplete searchbar (not working due to special case)"
              autoFocus={true}
              className="searchbar"
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
      <div className="comics-page-list">
        {data.map((comic) => {
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
      <div className="page">
        <ChangePage
          setActualPage={setActualPage}
          actualPage={actualPage}
          maxPage={maxPage}
        />
      </div>
    </div>
  );
};

export default Comics;
