import React from 'react';
import styled from 'styled-components';
import { CgCopy, CgSoftwareDownload } from 'react-icons/cg';

interface MenuOptionsProps {
  onClickDownload(e: any): void;
  onClickCopy(e: any): void;
}
const MenuOptions: React.FC<MenuOptionsProps> = ({
  onClickDownload,
  onClickCopy,
}) => {
  return (
    <MenuUI>
      <MenuItem id="menu-item-copy" onClick={onClickCopy} title="Copy Json">
        <span>Copy</span> <CgCopy size={20} />
      </MenuItem>
      <MenuItem
        id="menu-item-download"
        title="Download Json"
        onClick={onClickDownload}
      >
        <span>Download</span> <CgSoftwareDownload size={20} />
      </MenuItem>
    </MenuUI>
  );
};

const MenuUI = styled.ul`
  background: #000;
  display: flex;
  list-style: none;
  height: 40px;
  align-items: center;
  justify-content: right;
  cursor: pointer;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  display: flex;
  gap: 5px;
`;

export default MenuOptions;
