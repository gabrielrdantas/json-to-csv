import React from 'react';
import { Helmet } from 'react-helmet';

import Schema from '../Schema';

interface PropsType {
  title: string;
  ogDescription: string;
  description: string;
  ogTitle: string;
  schema: any;
}
const Seo: React.FC<PropsType> = ({
  title,
  description,
  ogDescription,
  ogTitle,
  schema,
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="/json-to-csv" />
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
      <Schema data={schema} />
    </Helmet>
  );
};

export default Seo;
