import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = HTMLAttributes<HTMLUListElement> & {
  itemSelected: number;
};

const Menu: React.FC<Props> = ({ itemSelected }) => {
  return (
    <MenuUI>
      <MenuItem>
        <Link href="/" passHref>
          <MenuLink
            id="menu-item-json-formatter"
            itemSelected={itemSelected === 0}
          >
            JSON Formatter
          </MenuLink>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/json-to-csv" passHref>
          <MenuLink id="menu-item-json-csv" itemSelected={itemSelected === 1}>
            JSON to CSV
          </MenuLink>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="/json-to-pdf" passHref>
          <MenuLink id="menu-item-json-pdf" itemSelected={itemSelected === 2}>
            JSON to PDF
          </MenuLink>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link href="/json-diff-checker" passHref>
          <MenuLink id="menu-item-json-diff" itemSelected={itemSelected === 3}>
            JSON Diff Checker
          </MenuLink>
        </Link>
      </MenuItem>
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

const MenuLink = styled.a<{ itemSelected: boolean }>`
  color: #fff;
  text-decoration: none;
  ${({ itemSelected }) => itemSelected && 'text-decoration: underline'};

  &:hover {
    text-decoration: underline;
  }
`;

export default Menu;
