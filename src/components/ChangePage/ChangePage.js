import "./ChangePage.css";
import ReactPaginate from "react-paginate";

const ChangePage = ({ actualPage, setActualPage, maxPage }) => {
  const handlePageClick = (event) => {
    setActualPage(event.selected + 1);
    //scroll back to top of page
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
