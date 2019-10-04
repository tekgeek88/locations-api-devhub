import React from 'react';

const Location = props => {
  return(
    <tr>
      <td>{props.location.id}</td>
      <td>{props.location.formatted_address}</td>
    </tr>
  );
}

export default Location;
