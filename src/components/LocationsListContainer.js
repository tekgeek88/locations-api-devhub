import React, { Component } from "react";
import LocationList from "./LocationList";
import Spinner from "./Spinner";
import devhubApi from "../api/DevHubCodeTest";
// import locations from '../sample_data/locations';

class LocationsListContainer extends Component {
  state = {
    locations: [],
    count: null,
    status: null,
    statusText: ""
  };

  onLocationRequest = async () => {
    // Fetch a list of location data from the given endpoint
    const response = await devhubApi.get("example-api-payload.json");
    // When the async task returns update the components state
    this.setState({
      locations: response.data.objects,
      count: response.data.meta.total_count,
      status: response.status,
      statusText: response.statusText
    });
  };

  componentDidMount() {
    // Make the initial request to the API for data
    this.onLocationRequest();
  }

  /**
   * If we are A-OKAY from the server and we have at least one location to display
   * pass the locations to the LocationList or display a loading spinner. 
   */
  renderLocationList() {
    if (this.state.status === 200 && !this.props.count) {
      return <LocationList locations={this.state.locations} />;
    }
    return <Spinner />;
  }

  /**
   * Helper method used to render a totalCount of the fetched locations
   * If there are no locations we do not display an element at all.
   */
  renderTotalCount() {
    if (!this.state.count) {
      return null;
    }
    return <div>Fetched {this.state.count} location(s)</div>;
  }

  render() {
    return (
      <div className="ui container" style={{ margin: "20px" }}>
        <h3 className="ui dividing header right aligned">{this.renderTotalCount()}</h3>
        {this.renderLocationList()}
      </div>
    );
  }
}

export default LocationsListContainer;
