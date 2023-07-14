import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Title>JSON Formatter | JSON to CSV </Title>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #000;
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: center;
`;
const Title = styled.h4`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;
export default Footer;
