import {
  Html, Head, Main, NextScript,
} from 'next/document'

const { GTM_TAG_ID } = process.env

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/images/favicon.png" />
        {/* Google Tag Manager */}
        {GTM_TAG_ID && (
        // eslint-disable-next-line
        <script
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_TAG_ID}');
          `,
          }}
        />
        )}
      </Head>
      <body>
        {GTM_TAG_ID && (
        <noscript>
          <iframe
            title="GTM"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_TAG_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
