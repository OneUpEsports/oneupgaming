import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#d0fa2d',
    },
  },
});

export default MyApp
