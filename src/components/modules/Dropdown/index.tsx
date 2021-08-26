import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import DropdownContext from './DropdownContext';

const StyledDropdownItem = styled.li`
  display: block;
  padding: 5px 10px;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;

  &:hover {
    color: #1e2125;
    background-color: #e9ecef;
  }
`;

const StyledDropdownMenu = styled.ul`
  display: block;
  position: absolute;
  z-index: 1000;
  padding: 5px 0;
  margin: 0;
  font-size: 14px;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  min-width: 200px;
`;

const StyledDropdownButton = styled.div`
  position: relative;
`;

const DropdownContainer = styled.div`
  display: inline-block;
`;

type DropdownComponent = {
  Button: React.FC;
  Menu: React.FC;
  Item: React.FC<DropdownMenuItemProps>;
};

type Props = {
  onSelect(value: any): void;
};

type DropdownMenuItemProps = {
  /**
   * @todo any remove
   */
  value: any;
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ value, children }) => {
  const { onClickItem } = useContext(DropdownContext);
  return <StyledDropdownItem onClick={() => onClickItem(value)}>{children}</StyledDropdownItem>;
};

const DropdownMenu: React.FC = ({ children }) => {
  const { show } = useContext(DropdownContext);

  if (show) {
    return <StyledDropdownMenu>{children}</StyledDropdownMenu>;
  }
  return <></>;
};

const DropdownButton: React.FC = ({ children }) => {
  const { onToggleShow, show } = useContext(DropdownContext);
  return <StyledDropdownButton onClick={() => onToggleShow(!show)}>{children}</StyledDropdownButton>;
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
Dropdown.Item = DropdownMenuItem;

export default Dropdown;
