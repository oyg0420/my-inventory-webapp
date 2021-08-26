import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Keywords from 'components/pages/Keywords';
import Layout from 'components/modules/Layout';
import RelKeywords from 'components/pages/RelKeywords';
import IconBasketWhite from 'images/icon-basket-white.svg';
import IconBasket from 'images/icon-basket.svg';
import NavigationBar from 'components/modules/NavigationBar';
import SideBar from 'components/modules/SideBar';
import { translate } from 'utils/locale';
import Avatar from 'components/atoms/Avatar';
import { useSelector } from 'react-redux';
import selectUser from 'modules/session/selector';
import FlexBox from 'components/atoms/FlexBox';
import Span from 'components/atoms/Span';

const Home: React.FC = () => {
  const user = useSelector(selectUser.user);
  return (
    <Layout>
      <Layout.Header>
        <NavigationBar />
      </Layout.Header>
      <Layout.Content>
        <Layout.SideBar>
          <SideBar.Header>
            <FlexBox styles={{ alignItems: 'center' }}>
              <Avatar url={user.avatar} />
              <Span styles={{ margin: '0 0 0 10px', fontSize: '15px' }}>{user.name}</Span>
            </FlexBox>
          </SideBar.Header>
          <SideBar.Menu>
            <SideBar.MenuItem pathTo="/keywords" iconUrl={{ default: IconBasket, active: IconBasketWhite }}>
              {translate('keyword_shopping')}
            </SideBar.MenuItem>
            <SideBar.MenuItem pathTo="/relKeywords" iconUrl={{ default: IconBasket, active: IconBasketWhite }}>
              {translate('keyword_relative')}
            </SideBar.MenuItem>
          </SideBar.Menu>
        </Layout.SideBar>
        <Layout.Body>
          <Switch>
            <Route exact path={['/', '/keywords']}>
              <Keywords />
            </Route>
            <Route path="/relKeywords">
              <RelKeywords />
            </Route>
          </Switch>
        </Layout.Body>
      </Layout.Content>
    </Layout>
  );
};

export default Home;
