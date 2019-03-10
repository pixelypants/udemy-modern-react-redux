import React, { FunctionComponent } from "react";
import {
  ResourceListProps,
  ResourceListStateResource
} from "../models/ResourceListStateProps";
import useResources from "./useResources";

const ResourceList: FunctionComponent<ResourceListProps> = props => {
  const resources = useResources<ResourceListStateResource>(props.resource);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
