// https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render/53837442#53837442

import React, { useReducer } from 'react';

export default function useForceUpdate() {
  [, forceUpdate] = useReducer((x) => x + 1, 0);

  return () => {
    forceUpdate();
  };
}
