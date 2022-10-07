import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import '../styles/globals.css'
import Header from '../components/Header';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-3011F8TTL4"
          strategy="afterInteractive"
          />

          <Script 
          id="google-analytics"
          strategy="afterInteractive"
          >
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-3011F8TTL4');
          `
          }</Script>
			<Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
