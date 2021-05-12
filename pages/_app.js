import { ThemeProvider } from 'styled-components';
import '../static/css/reset.css';
import '../static/css/fonts.css';
import { GlobalStyle, theme } from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
