import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>React Shop</title>
        <meta charSet='utf-8'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}