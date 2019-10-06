import React from 'react';

const Location = props => {
  // Destructuring used for easier access to the location properties
  const { id, formatted_address } = props.location;
  
  return(
    <tr>
      <td>{id}</td>
      <td>{formatted_address}</td>
    </tr>
  );
}

export default Location;
