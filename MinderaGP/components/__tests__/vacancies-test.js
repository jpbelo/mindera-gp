import React from 'react';
import Vacancies from '../vacancies';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Vacancies />).toJSON();
  expect(tree).toMatchSnapshot();
});
