import Head from 'next/head';
import Script from 'next/script';

import GlobalStyle from '../src/styles/global';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>

                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FF9000" />
                <meta
                  name="description"
                  content="Convert to json, formatter json, convert json to csv, json to pdf and checker your json files"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  async
                  href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500&display=swap"
                  rel="stylesheet"
                />

                <title>Convert and formatter json to csv, pdf and diff checker</title>

                <script dangerouslySetInnerHTML={{
                        __html: `
                        (function (w, d, s, l, i) {
                          w[l] = w[l] || [];
                          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                          var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != 'dataLayer' ? '&l=' + l : '';
                          j.async = true;
                          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                          f.parentNode.insertBefore(j, f);
                          function gtag(){l.push(arguments);}
                          gtag('js', new Date());
                        })(window, document, 'script', 'dataLayer', 'GTM-WL2PM76');
                        `
                    }}>
                </script>
                <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-880435751"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-880435751');
</script>

                <script data-ad-client="ca-pub-6901180360285673" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Script src="https://polyfill.io/v3/polyfill.min.js" strategy="beforeInteractive" />
            <noscript>
              <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WL2PM76"
              height="0"
              width="0"
              style={{display: "none", visibility: "hidden"}} />
            </noscript>

            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}


export default MyApp;
