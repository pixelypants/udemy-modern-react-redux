import React, { FunctionComponent } from "react";
import {
  ResourceListProps,
  ResourceListStateResource
} from "../models/ResourceListStateProps";
import useResources from "./useResources";

const ResourceList: FunctionComponent<ResourceListProps> = props => {
  const resources = useResources(props.resource);

  return (
    <ul>
      {resources.map((record: ResourceListStateResource) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
