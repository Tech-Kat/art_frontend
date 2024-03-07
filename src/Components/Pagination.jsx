import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Search from "./Search";

const API = import.meta.env.VITE_REACT_APP_API_URL;
const Pagination = () => {
  // state is set to 1 by default
  const [pageNumber, setPageNumber] = useState(0);

  const [data, setData] = useState([]);

  const paintingsPerPage = 6;
  const pagesVisited = pageNumber * paintingsPerPage;
  const pageCount = Math.ceil(Number(data.length / paintingsPerPage));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios
      .get(`${API}/paintings`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  const displayPaintings = data
    .slice(pagesVisited, pagesVisited + paintingsPerPage)
    .map((d) => {
      return (
        <div >
          <div className="one-card" key={d.id}>
            <Link to={`/paintings/${d.id}`}>
              <img
                className="pic-img"
                src={d.image}
                alt={`${d.name} img`}
                width="150px"
              />
            </Link>
            <br />
            <div className="index-info">
              <br />
              <h3> {d.name} </h3>
              <br />
            </div>
          </div>
        </div>
      );

      
    });

  return (
    <div className="display-cards">
      {displayPaintings}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containterClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {/* <Search
        handleChange={handleChange}
        searchInput={searchInput}
        handleCollapseAll={handleCollapseAll}
        handleExpandAll={handleExpandAll}
      /> */}
    </div>
  );
};


export default Pagination
