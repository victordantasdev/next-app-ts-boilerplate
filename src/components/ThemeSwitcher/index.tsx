import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { Moon, Sun } from './swichIcons';

interface Props {
  toggleTheme(): void;
}

const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      checkedIcon={<Sun />}
      uncheckedIcon={<Moon />}
      onColor={theme.primary}
      offColor={theme.primary}
    />
  );
};

export default ThemeSwitcher;
