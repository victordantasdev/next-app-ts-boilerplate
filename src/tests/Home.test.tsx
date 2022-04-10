import React from 'react';
import renderer from 'react-test-renderer';

import { dark, light } from '../styles/themes';
import Home from '../pages';

test('Render the Home page', () => {
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  const [theme, setTheme] = useStateMock(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const component = renderer.create(
    <Home toggleTheme={toggleTheme} />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
