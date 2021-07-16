import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inventory from 'components/Inventory';
import { Layout, LayoutHaeder, LayoutBody } from 'components/commons/Layout';
import NavigationBar from 'components/commons/NavigationBar';

const Home: React.FC = () => {
  return (
    <Layout>
      <LayoutHaeder>
        <NavigationBar links={[{ path: '/', label: '제품' }]} />
      </LayoutHaeder>
      <LayoutBody>
        <Switch>
          <Route exact path="/">
            <Inventory />
          </Route>
        </Switch>
      </LayoutBody>
    </Layout>
  );
};

export default Home;
