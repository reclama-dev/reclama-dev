import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import PropTypes from 'prop-types'
import ApolloProvider from '../Apollo'

import { NavBar } from '@/components/app/NavBar'
import { ThemeProvider } from '@/components/app/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppCacheProvider>
      <ApolloProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
      <Toaster />
    </AppCacheProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
