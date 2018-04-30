import React from 'react';
import Vacancies from '../vacancies';

test('renders correctly', () => {
  const tree = renderer.create(<Vacancies />).toJSON();
  expect(tree).toMatchSnapshot();
});
