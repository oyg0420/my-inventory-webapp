import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from 'components/pages/Products';
import Layout from 'components/modules/Layout';
import { v4 } from 'uuid';

const Home: React.FC = () => {
  return (
    <Layout links={[{ path: '/', label: '제품', key: v4() }]}>
      <Switch>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
