import React from "react";

const Location = props => {
  // Destructuring used for easier access to the location properties
  const { id, formatted_address } = props.location;

  return id ? 
  <tr data-test="component-location">
    <td data-test="component-location-id">{id}</td>
    <td data-test="component-location-address">{formatted_address}</td>
  </tr> : <tr data-test="component-location"></tr>;
};

Location.defaultProps = {
  location: {
    id: "",
    formatted_address: ""
  }
};

export default Location;



