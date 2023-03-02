import './globals.css'
import Layout from '../components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from '../context/DataContext'
import MyCookieConsent from '../components/MyCookieConsent/MyCookieConsent'
import { Analytics } from '@vercel/analytics/react';
import { useCookies } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  const [cookies] = useCookies(['Website-Analytics']);
  const isAnalyticsAccepted = cookies['Website-Analytics'] === 'true';




  return (
    
    <ChakraProvider>
      <DataContextProvider>
      {isAnalyticsAccepted && <Analytics />}
        <Layout>
        <MyCookieConsent />
        
          <Component {...pageProps} />
  
        </Layout>
      </DataContextProvider>
    </ChakraProvider>
    
  )
}

export default MyApp
