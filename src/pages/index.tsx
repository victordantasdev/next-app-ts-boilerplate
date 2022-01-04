import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import ThemeSwitcher from '../components/ThemeSwitcher/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

interface Props {
  toggleTheme: () => void
}

const Home: NextPage<Props> = ({ toggleTheme }) => (
  <Container>
    <h1>Next App TypeScript Boilerplate</h1>
    <ThemeSwitcher toggleTheme={toggleTheme} />
  </Container>
);

export default Home;
