import React from 'react';

interface SchemaType {
  data: any;
}
const Schema: React.FC<SchemaType> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default Schema;
