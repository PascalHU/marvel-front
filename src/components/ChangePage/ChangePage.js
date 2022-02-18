import "./ChangePage.css";

const ChangePage = ({ page, actualPage, setActualPage, maxPage }) => {
  return (
    <div className="page-btn-list">
      <p>
        <button
          className={
            actualPage === 1 || !actualPage ? "page-btn hide" : "page-btn "
          }
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
          className={
            actualPage === maxPage || !maxPage ? "page-btn hide" : "page-btn "
          }
          onClick={() => setActualPage(actualPage + 1)}
        >
          &gt;
        </button>
      </p>
    </div>
  );
};
export default ChangePage;
