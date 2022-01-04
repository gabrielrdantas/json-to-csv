import React from 'react';
import styled from 'styled-components';

interface contentProp {
  data: {
    title: string;
    text: string;
  }[];
}
const Content: React.FC<contentProp> = ({ data }) => {
  return (
    <ContainerInfo>
      {data.map(item => {
        return (
          <>
            <Subtitle>{item.title}</Subtitle>
            <Text>{item.text}</Text>
          </>
        );
      })}
    </ContainerInfo>
  );
};

const ContainerInfo = styled.article`
  margin: 35px 20px;
`;

const Text = styled.p``;

const Subtitle = styled.h3`
  margin: 35px 0;
`;
export default Content;
