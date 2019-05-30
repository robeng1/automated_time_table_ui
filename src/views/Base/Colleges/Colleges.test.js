import React from 'react';
import ReactDOM from 'react-dom';
import Colleges from './Colleges';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Colleges />, div);
  ReactDOM.unmountComponentAtNode(div);
});
