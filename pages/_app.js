import './globals.css'
import Layout from '../components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from '../context/DataContext'
import MyCookieConsent from '../components/MyCookieConsent/MyCookieConsent'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { VercelProvider } from "@vercel/analytics";
import { AppProps } from "next/app";


function MyApp({ Component, pageProps }) {
  



  return (
    
    <ChakraProvider>
      <DataContextProvider>
      <Analytics />
        <Layout>
        <MyCookieConsent />
        
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </DataContextProvider>
    </ChakraProvider>
    
  )
}

export default MyApp
