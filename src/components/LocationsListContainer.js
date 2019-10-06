import React, { Component } from "react";
import LocationsList from "./LocationsList";
import devhubApi from "../api/DevHubCodeTest";

/**
 * Fetches data from the DevHub locations API and passes it to the locations
 * list component.
 */
class LocationsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      count: 0,
      status: null,
      statusText: ""
    };
  }
  
  /**
   * Fetches the locations from the locations API then updates the state so that this component
   * and its children componets can be re-rendered with an updated display.
   */
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

  /**
   * This life cycle method sends the API request as soon as the coponent is rendered and on the screen.
   */
  componentDidMount() {
    // Make the initial request to the API for data
    this.onLocationRequest();
  }

  render() {
    return (
      <div className="ui segment" data-test="component-locationsListContainer" style={{ margin: "20px" }}>
        <LocationsList locations={this.state.locations} count={this.state.count} />
      </div>
    );
  }
}

export default LocationsListContainer;
