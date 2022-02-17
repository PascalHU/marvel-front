import "./Comics.css";
import Comic from "../../components/Comic/Comic";
import { useState, useEffect } from "react";
import axios from "axios";
import ChangePage from "../../components/ChangePage/ChangePage";
const Comics = ({ search }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [nbElement, setNbElement] = useState();
  const page = [];

  useEffect(() => {
    const searchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4000/comics?page=${actualPage}&title=${search}`
      );
      setNbElement(response.data.count);
      setData(response.data.results);
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
    <div className="comics-page container">
      <div className="page">
        <ChangePage
          page={page}
          setActualPage={setActualPage}
          actualPage={actualPage}
          maxPage={maxPage}
        />
      </div>
      <div className="comics-page-list">
        {data.map((comic) => {
          return <Comic key={comic._id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
