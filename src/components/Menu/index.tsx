import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = HTMLAttributes<HTMLUListElement> & {
  itemSelected: number;
};

const Menu: React.FC<Props> = ({ itemSelected }) => {
  return (
    <MenuUI>
      <MenuItem>
        <MenuLink to="/" itemSelected={itemSelected === 0}>
          JSON Formatter
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/json-to-csv" itemSelected={itemSelected === 1}>
          JSON to CSV
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/json-to-pdf" itemSelected={itemSelected === 2}>
          JSON to PDF
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/json-diff-checker" itemSelected={itemSelected === 3}>
          JSON Diff Checker
        </MenuLink>
      </MenuItem>
      {/* <MenuItem>
        <MenuLink to="/" itemSelected={itemSelected === 2}>
          JSON to CSV With advanced filters
        </MenuLink>
      </MenuItem> */}
    </MenuUI>
  );
};

const MenuUI = styled.ul`
  display: flex;
  list-style: none;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.li`
  margin: 0 30px 0 0;
`;

const MenuLink = styled(Link)<{ itemSelected: boolean }>`
  color: #fff;
  text-decoration: none;
  ${({ itemSelected }) => itemSelected && 'text-decoration: underline'};

  &:hover {
    text-decoration: underline;
  }
`;

export default Menu;
