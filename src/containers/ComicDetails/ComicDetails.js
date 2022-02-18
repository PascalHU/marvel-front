import "./ComicDetails.css";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

const ComicDetails = ({ changeFavorite, user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const location = useLocation();
  const { id } = location.state;
  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://marvel-backend-ph.herokuapp.com/comic?id=${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    searchData();
  }, [id]);
  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <div className="comic-page container">
      <div className="comic-info">
        <h2>{data.title} Description Card</h2>
        <div className="specific-comic-info">
          <div className="img">
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt={data.title}
            />
            {user && (
              <FavoriteButton
                id={id}
                user={user}
                changeFavorite={changeFavorite}
                page="comic"
              />
            )}
          </div>
          <div className="spe-char">
            <div className="spe-char-line">
              <span>Name : </span>
              <span>{data.title}</span>
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
    </div>
  );
};
export default ComicDetails;
