import React, { useState, useEffect, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import { SeasonsState } from './models/SeasonsPropsState';
import useLocation from './useLocation';

const App: FunctionComponent = () => {
  const useLoc: SeasonsState = useLocation();

  let content: JSX.Element;
  if (useLoc.errorMessage) {
    content = <div>Error: {useLoc.errorMessage}</div>;
  } else if (useLoc.lat) {
    content = <SeasonDisplay lat={useLoc.lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
