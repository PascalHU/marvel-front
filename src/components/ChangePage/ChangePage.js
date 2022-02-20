import "./ChangePage.css";
import ReactPaginate from "react-paginate";

const ChangePage = ({ actualPage, setActualPage, maxPage }) => {
  const handlePageClick = (event) => {
    setActualPage(event.selected + 1);
    console.log(actualPage);
  };
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={maxPage}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};
export default ChangePage;
