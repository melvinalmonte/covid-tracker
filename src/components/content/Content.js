import React from "react";

const Content = ({ children }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="tile is-ancestor simple-cov-tile">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Content;
