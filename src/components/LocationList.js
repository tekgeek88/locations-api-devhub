import React from 'react';
import Location from './Location';

const LocationList = props => {
  const locations = props.locations.map(location => {
    return <Location key={location.id} location={location}/>;
  });
  return(
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Formatted address</th>
          </tr>
        </thead>
        <tbody>
          {locations}
        </tbody>
      </table>
    </div>
  );
}

export default LocationList;