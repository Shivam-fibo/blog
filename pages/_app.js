import '@/styles/globals.css'
import Navbar from '@/componets/navbar'
export default function App({ Component, pageProps }) {
  
  return <>
  <Navbar/>
  <Component {...pageProps} />
  
  </>
}
