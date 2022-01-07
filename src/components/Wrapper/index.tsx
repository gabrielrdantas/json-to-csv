import React from 'react';
import styled from 'styled-components';

const Content: React.FC = ({ children }) => {
  return <ContentUi>{children}</ContentUi>;
};

const ContentUi = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Content;
