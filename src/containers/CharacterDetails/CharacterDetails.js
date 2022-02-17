import "./CharacterDetails.css";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Comic from "../../components/Comic/Comic";

const CharacterDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4000/character?id=${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    searchData();
  }, [id]);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div className="character-page container">
      <div className="character-info">
        <h2>{data.name} Description Card</h2>
        <div className="specific-character-info">
          <div className="img">
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt={data.name}
            />
          </div>
          <div className="spe-char">
            <div className="spe-char-line">
              <span>Name : </span>
              <span>{data.name}</span>
            </div>
            <div className="spe-char-line">
              <span>Description : </span>
              <span>
                {data.description
                  ? data.description
                  : "No description available"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="character-comics">
        <h2>Comics</h2>

        <div className="comics-list">
          {data.comics.map((comic, index) => {
            return <Comic key={index} comic={comic} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default CharacterDetails;
