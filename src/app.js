import React from 'react';
import { render } from 'react-dom';

import Eth from './components/Eth';

const App = () => {
  return <Eth />;
};

render(<App />, document.getElementById('root'));
