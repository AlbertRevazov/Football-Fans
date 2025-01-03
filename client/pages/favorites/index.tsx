import React, { FC } from 'react';
import Layout from '../../src/components/ui/layout';
import Favorites from '../../src/components/favorites';

const FavoritesPage: FC = () => {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
};

export default FavoritesPage;
