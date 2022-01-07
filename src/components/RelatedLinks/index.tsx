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
              <Link href={item.link}>{item.name}</Link>
            </List>
          );
        })}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 0 20px;
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
const Subtitle = styled.h4`
  margin: 35px 0 20px;
`;
const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const List = styled.li`
  margin: 0 20px 0 0;
`;

export default RelatedLinks;
