import React from "react";
import Collapsible from "react-collapsible";
import Utils from "../../common/utils";

const LocalCases = ({
  localData,
  localCasesHandler,
  handleKeyPress,
  onSubmit
}) => {
  return (
    <div className="column animate__animated animate__fadeInUp">
      <div className="field has-addons cov-searchbar-container">
        <div className="control">
          <input
            onChange={localCasesHandler}
            onKeyDown={handleKeyPress}
            className="input is-rounded"
            type="text"
            placeholder="Search city and state..."
          />
        </div>
        <div className="control">
          <button className="button is-rounded" onClick={onSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="column">
        <p className="subtitle">Top Matches: </p>

        {localData.map(data => (
          <div
            key={data.item.uid}
            className="column animate__animated animate__fadeInUp"
          >
            <Collapsible
              accordionPosition="right-0"
              trigger={
                <button className="button is-rounded">
                  {data.item.combinedKey}
                </button>
              }
            >
              <div className="box column is-4 cov-collapsible-content">
                <p className="has-text-black">
                  Confirmed: {data.item.confirmed.toLocaleString()}
                </p>
                <p className="has-text-black">
                  Recovered: {data.item.recovered.toLocaleString()}
                </p>
                <p className="has-text-black">
                  Deaths: {data.item.deaths.toLocaleString()}
                </p>
                <p className="has-text-black">
                  Last Updated: {Utils.lastUpdated(data.item.lastUpdate)}
                </p>
              </div>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalCases;
