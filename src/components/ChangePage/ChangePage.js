import "./ChangePage.css";

const ChangePage = ({ page, actualPage, setActualPage, maxPage }) => {
  return (
    <>
      <button
        className={actualPage === 1 ? "page-btn hide" : "page-btn "}
        onClick={() => setActualPage(actualPage - 1)}
      >
        &lt;
      </button>
      {page.map((index) => {
        return (
          <button
            key={index}
            className={`page-btn ${index === actualPage ? "red" : "black"}`}
            onClick={(event) => setActualPage(Number(event.target.value))}
            value={index}
          >
            {index}
          </button>
        );
      })}
      <button
        className={actualPage === maxPage ? "page-btn hide" : "page-btn "}
        onClick={() => setActualPage(actualPage + 1)}
      >
        &gt;
      </button>
    </>
  );
};
export default ChangePage;
