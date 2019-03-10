import React, { useState, useEffect, FunctionComponent } from "react";
import axios from "axios";
import {
  ResourceListProps,
  ResourceListStateResource
} from "../models/ResourceListStateProps";

const ResourceList: FunctionComponent<ResourceListProps> = props => {
  const [resources, setResources] = useState<Array<ResourceListStateResource>>(
    []
  );

  useEffect(() => {
    (async (resource: string) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(props.resource);
  }, [props.resource]);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
