import PropTypes from "prop-types";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUpdatedUrl } from "../utils/updateUrl";

const PaginationList = ({
  first,
  total: totalElements,
  count: limit,
  page,
  getFilterFabricValue,
}) => {
  const [currentPage, setcurrentPage] = useState(page ? page : 1);
  const [itemsPerPage, setitemsPerPage] = useState(limit || 20);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(limit | 20);
  useEffect(() => {
    setitemsPerPage(itemsPerPage);
    setpageNumberLimit(pageNumberLimit);
    setNumberOfElements(numberOfElements);
  }, [itemsPerPage, numberOfElements, pageNumberLimit]);

  // const loc = useLocation()
  const history = useNavigate();
  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    history.push(
      getUpdatedUrl("page", `${event.target.id >= 1 ? event.target.id : 1}`)
    );
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil((totalElements || 0) / itemsPerPage); i++) {
    pages.push(i);
  }

  ////////////////////////////////////////////////////////////////////
  const [constdata, setdata] = useState();
  useEffect(() => {
    if (getFilterFabricValue?.name === "KNIT") {
      setcurrentPage(1);
      history.push(getUpdatedUrl("page", page >= 1 ? 1 : 1));
    } else if (getFilterFabricValue?.name === "Woven") {
      setcurrentPage(1);
      history.push(getUpdatedUrl("page", page >= 1 ? 1 : 1));
    }
  }, [getFilterFabricValue]);

  ////////////////////////////////////////////////////////////////

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={`${number}`}
          onClick={handleClick}
          className={currentPage === number ? "active" : "page-item"}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    history.push(
      getUpdatedUrl("page", `${currentPage + 1 >= 1 ? currentPage + 1 : 1}`)
    );
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if (currentPage % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    history.push(
      getUpdatedUrl("page", `${currentPage - 1 >= 1 ? currentPage - 1 : 1}`)
    );
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="handle-pagination" onClick={handleNextbtn}>
        {" "}
        ...{" "}
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="handle-pagination" onClick={handlePrevbtn}>
        {" "}
        ...{" "}
      </li>
    );
  }

  useEffect(() => {
    if (first) {
      setcurrentPage(1);
    }
  }, [first]);

  return (
    <div className="admin-pagiantion">
      <div className="row  mt-25">
        <div className="col-lg-4">
          {totalElements ? (
            <p>
              Showing{" "}
              <span className="number-start">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              {(currentPage - 1) * itemsPerPage + itemsPerPage >
                totalElements ? (
                <span className="per-number">{totalElements}</span>
              ) : (
                <span className="per-number">
                  {(currentPage - 1) * numberOfElements + itemsPerPage}
                </span>
              )}{" "}
              of <span className="total-number">{totalElements}</span> entries
            </p>
          ) : undefined}
        </div>
        <div className="col-lg-8">
          {totalElements >= itemsPerPage ? (
            <div className="pagination-content">
              <ul className="pageNumbers">
                <li>
                  <button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0] ? true : false}
                  >
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                  <button
                    onClick={handleNextbtn}
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                  >
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </li>
              </ul>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
PaginationList.propTypes = {
  first: PropTypes.bool,
  totalElements: PropTypes.number,
  count: PropTypes.number,
  page: PropTypes.number,
};
export default PaginationList;
