import React from "react";

const Content = ({ children }) => {
  return (
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div className="tile is-ancestor">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Content;
