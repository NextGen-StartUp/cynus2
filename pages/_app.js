import './globals.css'
import Layout from '../components/Layout/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { DataContextProvider } from '../context/DataContext'
import PopUp from '../components/PopUp/PopUp'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DataContextProvider>
        <Layout>
        <PopUp />
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </DataContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
