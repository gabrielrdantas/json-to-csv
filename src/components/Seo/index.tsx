import React from 'react';
import { Helmet } from 'react-helmet';

interface PropsType {
  title: string;
  ogDescription: string;
  description: string;
  canonical: string;
  ogTitle: string;
}

declare global {
  interface Window {
    gtag: any;
  }
}

const Seo: React.FC<PropsType> = ({
  title,
  description,
  ogDescription,
  ogTitle,
  canonical,
}) => {
  // useEffect(() => {
  //   window.gtag('config', 'AW-880435751');
  //   window.gtag('event', 'conversion', {
  //     send_to: 'AW-880435751/A8HPCKfs5IUYEKfE6aMD',
  //   });
  // }, []);
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta
        lang="en"
        name="keywords"
        content="JSON, CSV, PDF, convert, online"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:description" content={ogDescription} />
    </Helmet>
  );
};

export default Seo;
