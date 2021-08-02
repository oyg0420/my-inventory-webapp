import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Keywords from 'components/pages/Keywords';
import Layout from 'components/modules/Layout';
import RelKeywords from 'components/pages/RelKeywords';

const Home: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/', '/keywords']}>
          <Keywords />
        </Route>
        <Route path="/relKeywords">
          <RelKeywords />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Home;
