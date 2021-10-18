import '../styles/globals.css'
import Link from 'next/link'
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createCustomTheme } from '../src/theme';
import useSettings from '../src/hooks/useSettings';
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'

Amplify.configure({
  ...config,
  ssr: true
})

export default function MyApp({ Component, pageProps }) {
const { settings } = useSettings();

const theme = createCustomTheme({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  roundedCorners: settings.roundedCorners,
  theme: settings.theme
});

  
  return (
    <ThemeProvider theme={theme}>
            <CssBaseline />
      <nav >
        <Link href="/">
          <span >Home</span>
        </Link>
        <Link href="/profile">
          <span >Profiles</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

