import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Keywords from 'components/pages/Keywords';
import Layout from 'components/modules/Layout';
import { v4 } from 'uuid';

const Home: React.FC = () => {
  return (
    <Layout links={[{ path: '/', label: '쇼핑 키워드', key: v4() }]}>
      <Switch>
        <Route path="/">
          <Keywords />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
