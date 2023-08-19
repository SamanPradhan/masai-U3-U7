import React from "react";
// { total, itemPage, currPage, pageTo }
function Pagination() {
  // const handlePage = (p) => {
  //   pageTo(page);
  // };

  // const getButton = () => {};
  return (
    <div data-test-id="pagination-contsiner">
      {/* This is the button to switch to the prev page */}
      <button data-test-id="prev-pagination">Previous</button>
      {/* This is the button to switch to the next page */}
      <button data-test-id="next-pagination">Next</button>
      {/* This is the button that shows all the pages */}
      <button data-test-id="number-pagination"></button>
    </div>
  );
}

export default Pagination;
