
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'
import { darktheme } from '../themes'
import '@/styles/globals.css'


function App({ Component, pageProps }: AppProps) {
  return  (
    <NextUIProvider theme={darktheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
  
}

export default App;