import React from 'react';
import styled from 'styled-components';

const Content: React.FC = ({ children }) => {
  return <ContentUi>{children}</ContentUi>;
};

const ContentUi = styled.section`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;

export default Content;
