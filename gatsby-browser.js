import { ThemeProvider } from 'emotion-theming';
import { CacheProvider } from '@emotion/core';

import myCache from "./src/emotion-cache"
import theme from './src/theme';

export const wrapPageElement = ({ element }) => (
  <CacheProvider value={myCache}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </CacheProvider>
);
