import React from "react";

const CareerPage = () => {
   // back to top button
   const backToTopHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
     <div>
        <button
          id="backtotopbtn"
          title="Go to top"
          onClick={() => backToTopHandler()}
        >
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
        </button>
      </div>
      <div className="career-page">
        <h1>Career</h1>
        

      </div>
    </>
  );
};
export default CareerPage;
