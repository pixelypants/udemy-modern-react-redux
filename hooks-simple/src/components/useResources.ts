import { useState, useEffect } from "react";
import axios from "axios";

const useResources = <T>(resource: string): Array<T> => {
  const [resources, setResources] = useState<Array<T>>([]);

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
