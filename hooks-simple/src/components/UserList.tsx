import React, { FunctionComponent } from "react";
import { UserListStateUser, UserListState } from "../models/UserListStateProps";
import useResources from "./useResources";

const UserList: FunctionComponent = () => {
  const resources = useResources<UserListStateUser>("users");

  return (
    <ul>
      {resources.map((record: UserListStateUser) => (
        <li key={record.id}>{record.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
