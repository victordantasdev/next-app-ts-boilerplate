import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';
import { dark, light } from '../styles/themes';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NextNProgress
        color={theme.primary}
        options={{ showSpinner: false }}
      />
      <Component toggleTheme={toggleTheme} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
