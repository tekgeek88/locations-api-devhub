import React from "react";
import Location from "./Location";

const LocationsList = props => {
  const locations = props.locations.map(location => {
    return <Location key={location.id} location={location} />;
  });

  /**
   * Helper method used to render a totalCount of the fetched locations
   * If there are no locations we do not display an element at all.
   */
  const renderTotalCount = () => {
    const { count } = props;
    if (!count) {
      return (
        <h3
          className="ui header right aligned"
          data-test="component-locationsListCount"
        >
          Fetched {count} location(s)
        </h3>
      );
    }
    return (
      <h3 className="ui dividing header right aligned">
        Fetched {count} location(s)
      </h3>
    );
  };

  const renderTable = () => {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Formatted address</th>
          </tr>
        </thead>
        <tbody>{locations}</tbody>
      </table>
    );
  };

  return (
    <div data-test="component-locationsList">
      {renderTotalCount()}
      {props.count ? renderTable() : null}
    </div>
  );
};

LocationsList.defaultProps = {
  locations: [],
  count: 0
};

export default LocationsList;
