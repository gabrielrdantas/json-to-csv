import React from 'react';
import styled from 'styled-components';

interface contentProp {
  data: linkProps[];
}

interface linkProps {
  name: string;
  link: string;
}
const RelatedLinks: React.FC<contentProp> = ({ data }) => {
  return (
    <Container>
      <Subtitle>Related Links</Subtitle>
      <Ul>
        {data.map(item => {
          return (
            <List>
              <Link className="menu-related-link" href={item.link}>
                {item.name}
              </Link>
            </List>
          );
        })}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 0 20px;
  position: absolute;
  left: 50%;
  margin-left: -400px;
  bottom: -100px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Subtitle = styled.h3`
  margin: 35px 0 20px;
`;
const Link = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const List = styled.li`
  margin: 0 20px 0 0;
  color: #333;
`;

export default RelatedLinks;
