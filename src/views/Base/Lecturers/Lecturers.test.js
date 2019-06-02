import React from 'react';
import ReactDOM from 'react-dom';
import Lecturers from './Lecturers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lecturers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
