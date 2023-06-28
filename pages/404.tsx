import React from 'react';
import Link from 'next/link';

export const Page404: React.FC = () => {
  return (
    <div>
      <h1>Você se perdeu e caiu na página 404 :O</h1>
      <Link href="/">Ir para a home</Link>
    </div>
  );
};
export default Page404;
