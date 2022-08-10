import renderer from 'react-test-renderer';
import React from 'react';
import Navbar from '../Navbar.js';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Navbar /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
