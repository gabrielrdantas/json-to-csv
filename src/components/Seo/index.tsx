import React from 'react';
import { NextSeo } from 'next-seo';

interface PropsType {
  title: string;
  description: string;
}

declare global {
  interface Window {
    gtag: any;
  }
}

const Seo: React.FC<PropsType> = ({ title, description }) => {
  // useEffect(() => {
  //   window.gtag('config', 'AW-880435751');
  //   window.gtag('event', 'conversion', {
  //     send_to: 'AW-880435751/A8HPCKfs5IUYEKfE6aMD',
  //   });
  // }, []);
  return <NextSeo title={title} description={description} />;
};

export default Seo;
