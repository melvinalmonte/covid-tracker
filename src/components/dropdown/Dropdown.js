import React from "react";

const Dropdown = ({ selectCountry, countries, children }) => {
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="column dropdown-container">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <p className="subtitle has-text-black">Country</p>
              <div className="field">
                <div className="control">
                  <div className="select is-rounded" onChange={selectCountry}>
                    <select className="animate__animated animate__fadeIn">
                      <option value={"global"} defaultValue>
                        Global
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.iso2}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column dropdown-container">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
