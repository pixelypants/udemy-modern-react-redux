import React from "react";
import { SpinnerProps } from "./models/SpinnerPropsState";

const Spinner = (props: SpinnerProps) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
