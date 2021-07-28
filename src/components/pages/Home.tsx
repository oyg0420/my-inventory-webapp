import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inventory from 'components/pages/Inventory';
import Layout from 'components/modules/Layout';
import { v4 } from 'uuid';

const Home: React.FC = () => {
  return (
    <Layout links={[{ path: '/', label: '제품', key: v4() }]}>
      <Switch>
        <Route path="/">
          <Inventory />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
