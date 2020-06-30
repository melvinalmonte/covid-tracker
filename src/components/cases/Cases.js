import React from "react";

const Cases = ({ loading, data }) => {
  if (loading) {
    return (
      <div className="tile is-vertical is-parent">
        <div className="tile is-child box">
          <p className="title has-text-black">Status:</p>
          <p className="subtitle has-text-black">Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="tile is-parent">
      <div className="tile is-child box has-text-centered simple-cov-tile">
        <p className="subtitle has-text-info">Confirmed</p>
        <p className="subtitle has-text-black animate__animated animate__fadeIn">
          {data.confirmed.toLocaleString()}
        </p>
      </div>
      <div className="tile is-child box has-text-centered simple-cov-tile">
        <p className="subtitle has-text-success">Recovered</p>
        <p className="subtitle has-text-black animate__animated animate__fadeIn">
          {data.recovered.toLocaleString()}
        </p>
      </div>
      <div className="tile is-child box has-text-centered simple-cov-tile">
        <p className="subtitle has-text-danger">Deaths</p>
        <p className="subtitle has-text-black animate__animated animate__fadeIn">
          {data.deaths.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Cases;
