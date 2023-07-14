import React from 'react';
import styled from 'styled-components';
import {
  CgCopy,
  CgSoftwareDownload,
  CgArrowsExpandLeftAlt,
} from 'react-icons/cg';

interface MenuOptionsProps {
  onClickDownload(e: any): void;
  onClickCopy(e: any): void;
  onClickFullScreen(e: any): void;
}
const MenuOptions: React.FC<MenuOptionsProps> = ({
  onClickDownload,
  onClickCopy,
  onClickFullScreen,
}) => {
  return (
    <MenuUI>
      <MenuItem
        id="menu-item-copy"
        onClick={onClickFullScreen}
        title="Full Screen"
      >
        <Span>Full Screen</Span> <CgArrowsExpandLeftAlt size={20} />
      </MenuItem>
      <MenuItem id="menu-item-copy" onClick={onClickCopy} title="Copy Json">
        <Span>Copy</Span> <CgCopy size={20} />
      </MenuItem>
      <MenuItem
        id="menu-item-download"
        title="Download Json"
        onClick={onClickDownload}
      >
        <Span>Download</Span> <CgSoftwareDownload size={20} />
      </MenuItem>
    </MenuUI>
  );
};

const MenuUI = styled.ul`
  background: #0f598a;
  display: flex;
  list-style: none;
  height: 40px;
  align-items: center;
  justify-content: right;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  display: flex;
  gap: 5px;
  color: #fff;
  line-height: 26px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  margin: -2px 0 0 0;
`;

export default MenuOptions;
