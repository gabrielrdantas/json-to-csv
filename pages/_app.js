import Head from 'next/head';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>

                <meta charset="utf-8" />
                <link rel="icon" href="./favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#FF9000" />
                <meta
                  name="description"
                  content="Convert to json, formatter json, convert json to csv, json to pdf and checker your json files"
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
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'AW-880435751')
                          gtag('event', 'conversion', {'send_to': 'AW-880435751/A8HPCKfs5IUYEKfE6aMD'});
                        })(window, document, 'script', 'dataLayer', 'GTM-WL2PM76');
                        `
                    }}>
                </script>
                <script 
                  async 
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6901180360285673"
                  crossorigin="anonymous"></script>
            </Head>
            <Script src="https://polyfill.io/v3/polyfill.min.js" strategy="beforeInteractive" />
            <noscript>
              <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WL2PM76"
              height="0"
              width="0"
              style={{display: "none", visibility: "hidden"}} />
            </noscript>

  
            <Component {...pageProps} />
        </>
    )
}


export default MyApp;
