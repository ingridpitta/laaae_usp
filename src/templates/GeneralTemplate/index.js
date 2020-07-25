import React from "react";

const GeneralTemplate = ({ children }) => {
  return (
    <div className="container">
      <nav>LAAAE</nav>
      {children}
      <footer>LAAAE</footer>
    </div>
  );
};

export default GeneralTemplate;
