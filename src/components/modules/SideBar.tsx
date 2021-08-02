import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import IconBasketWhite from 'images/icon-basket-white.svg';
import IconBasket from 'images/icon-basket.svg';

const SideBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #fff;
  width: 200px;
  padding: 1rem;
  flex-direction: column;
  box-shadow: 0 0.125em 0.5em rgb(0 0 0 / 15%);

  hr {
    height: 1px;
    margin: 10px 0;
    color: inherit;
    background-color: #6c757d;
    border: 0;
    opacity: 0.25;
  }
`;

const SideBarMenuItem = styled.li`
  margin-bottom: 5px;
`;

const SideBarMenuLink = styled.div`
  cursor: pointer;
  background: 0 0;
  border: 0;
  border-radius: 0.25rem;
  color: #212529;
  display: flex;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &.active {
    color: #fff;
    background-color: #0d6efd;
  }

  > span {
    font-size: 16px;
  }
`;

const SideBarMenuHeader = styled.div`
  padding: 0 1rem;
`;

const SideBarMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-bottom: auto;
`;

const SideBarMenuIcon = styled.svg<{ styles: { url?: string } }>`
  background-image: url(${props => props.styles?.url});
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  pointer-events: none;
  margin-right: 0.5rem;
  margin-top: 2px;
`;

const SideBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <SideBarContainer>
      <SideBarMenuHeader>닉네임</SideBarMenuHeader>
      <hr />
      <SideBarMenuList>
        <SideBarMenuItem>
          <SideBarMenuLink
            className={classNames({ active: location.pathname === '/keyword' })}
            onClick={() => history.push('/keyword')}
          >
            <SideBarMenuIcon styles={{ url: location.pathname === '/keyword' ? IconBasketWhite : IconBasket }} />
            <span>쇼핑 키워드</span>
          </SideBarMenuLink>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <SideBarMenuLink onClick={() => history.push('/')}>
            <SideBarMenuIcon styles={{ url: IconBasket }} />
            <span>연관 키워드</span>
          </SideBarMenuLink>
        </SideBarMenuItem>
      </SideBarMenuList>
    </SideBarContainer>
  );
};

export default SideBar;
