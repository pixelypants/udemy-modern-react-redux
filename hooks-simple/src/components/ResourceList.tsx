import React, { Component } from "react";
import axios from "axios";
import {
  ResourceListProps,
  ResourceListState
} from "../models/ResourceListStateProps";

class ResourceList extends Component<ResourceListProps, ResourceListState> {
  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps: ResourceListProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: response.data });
    }
  }
  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
