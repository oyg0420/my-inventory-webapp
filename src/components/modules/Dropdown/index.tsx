import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import DropdownContext from './DropdownContext';

const StyledDropdownItem = styled.li<{ styles: DropdownMenuItemProps['styles'] }>`
  display: block;
  padding: 5px;
  color: #212529;
  text-align: ${props => props.styles?.textAlign || 'left'};
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    color: #1e2125;
    background-color: #e9ecef;
  }
`;

const StyledDropdownMenu = styled.ul<{ styles?: DropdownMenuProps['styles'] }>`
  display: block;
  position: absolute;
  z-index: 1000;
  padding: 2px 0;
  margin: ${props => props.styles?.margin || 0};
  ${props => props.styles?.right && `right: ${props.styles.right};`}
  ${props => props.styles?.left && `left: ${props.styles.left};`}
  font-size: 14px;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  min-width: 100px;
`;

const StyledDropdownButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

type DropdownMenuItemProps = {
  /**
   * @todo any remove
   */
  value: any;
  styles?: {
    textAlign?: 'center' | 'left' | 'right';
  };
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ value, styles, children }) => {
  const { onClickItem } = useContext(DropdownContext);
  return (
    <StyledDropdownItem styles={styles} onClick={() => onClickItem(value)}>
      {children}
    </StyledDropdownItem>
  );
};

type DropdownMenuProps = {
  styles?: {
    left?: string;
    right?: string;
    margin?: string;
  };
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ styles, children }) => {
  const { show } = useContext(DropdownContext);

  if (show) {
    return <StyledDropdownMenu styles={styles}>{children}</StyledDropdownMenu>;
  }
  return <></>;
};

const DropdownButton: React.FC = ({ children }) => {
  const { onToggleShow, show } = useContext(DropdownContext);
  return <StyledDropdownButton onClick={() => onToggleShow(!show)}>{children}</StyledDropdownButton>;
};

type DropdownComponent = {
  Button: React.FC;
  Menu: React.FC<DropdownMenuProps>;
  MenuItem: React.FC<DropdownMenuItemProps>;
};

type Props = {
  onSelect(value: any): void;
};

const Dropdown: React.FC<Props> & DropdownComponent = ({ onSelect, children }) => {
  const [show, toggleShow] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const handleShowToggle = useCallback(
    (nextShow: boolean) => {
      toggleShow(nextShow);
    },
    [toggleShow]
  );

  const handleClickItem = useCallback(
    value => {
      onSelect(value);
      handleShowToggle(false);
    },
    [onSelect, handleShowToggle]
  );

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { target } = e;

      if (!(target && dropdownContainerRef.current?.contains(target as Node))) {
        handleShowToggle(false);
      }
    };

    if (show) {
      document.addEventListener('click', handleClick);
    }

    return () => document.removeEventListener('click', handleClick);
  }, [handleShowToggle, show]);

  return (
    <DropdownContainer ref={dropdownContainerRef}>
      <DropdownContext.Provider value={{ show, onToggleShow: handleShowToggle, onClickItem: handleClickItem }}>
        {children}
      </DropdownContext.Provider>
    </DropdownContainer>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

export default Dropdown;
