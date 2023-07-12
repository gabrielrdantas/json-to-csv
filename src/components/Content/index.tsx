import React from 'react';
import styled from 'styled-components';

const Wrapper: React.FC = ({ children }) => {
  return <WrapperUi>{children}</WrapperUi>;
};

const WrapperUi = styled.section`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  padding: 0;
`;

export default Wrapper;
