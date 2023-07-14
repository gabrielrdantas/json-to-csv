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
        <Section>
          <Title>{title}</Title>
          <Menu itemSelected={itemSelected} />
        </Section>
      </Content>
    </HeaderContainer>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.header`
  background: #021c55;
  width: 100%;
  height: 80px;
`;
const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  color: #fff;
`;
export default Header;
