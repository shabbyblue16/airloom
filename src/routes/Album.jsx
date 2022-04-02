/* eslint-disable react/prop-types */
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function Album(props) {
  const location = useLocation();
  const { test } = location.state;
  console.log(location);
  return (
    <div>
      {test}
    </div>
  );
}

export default Album;
