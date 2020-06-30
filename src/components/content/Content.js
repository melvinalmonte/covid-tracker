import React from "react";

const Content = ({ children }) => {
  return (
    <section className="hero simple-cov-tile">
      <div className="hero-body">
        <div className="container">
          <div className="tile is-ancestor">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Content;
