import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Content from '../Content';
import Menu from '../Menu';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> {
  itemSelected: number;
}

const Header: React.FC<HeaderProps> = ({ itemSelected, title }) => {
  return (
    <HeaderContainer>
      <Content>
        <Title>{title}</Title>
        <Menu itemSelected={itemSelected} />
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: #333;
  width: 100%;
  padding: 15px 0;
`;
const Title = styled.h1`
  font-size: 26px;
  text-align: center;
`;
export default Header;
