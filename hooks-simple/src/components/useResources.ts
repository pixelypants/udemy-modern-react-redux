import { useState, useEffect } from "react";
import axios from "axios";
import { ResourceListStateResource } from "../models/ResourceListStateProps";

const useResources = (resource: string) => {
  const [resources, setResources] = useState<Array<ResourceListStateResource>>(
    []
  );

  useEffect(() => {
    (async (resource: string) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
