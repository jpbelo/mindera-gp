import React from 'react';
import About from '../about';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
