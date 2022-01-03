import React from 'react';
import styled from 'styled-components';

interface statusDiff {
  isDiff: boolean;
  size: number;
}

interface Props {
  color: string;
  items: statusDiff[];
}
const StatusDiff: React.FC<Props> = ({ items, color }) => {
  const countItems = items.length;

  const totalSize = items.reduce((acc, actual) => acc + actual.size, 0);

  const getHeightItem = (number: number) => {
    const heightPercentage = number / totalSize;
    const size = Math.floor(300 * heightPercentage);
    return `${size > 5 ? size : 5}px`;
  };

  return countItems < 1000 ? (
    <Container>
      {items.map(item => (
        <Fill
          isDiff={item.isDiff}
          color={color}
          height={getHeightItem(item.size)}
        />
      ))}
    </Container>
  ) : null;
};

const Container = styled.div`
  display: flex;
  margin: 0 0 0 5px;
  height: 300px;
  background: #ccc;
  width: 15px;
  flex-direction: column;
`;

const Fill = styled.div<{ isDiff: boolean; color: string; height: string }>`
  ${({ isDiff, color }) =>
    isDiff === true ? `background: ${color}` : `background: #ccc`};
  ${({ height }) => `height: ${height}`};
  width: 15px;
`;
export default StatusDiff;
