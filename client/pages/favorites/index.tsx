import React, { FC } from 'react';
import Layout from '../../src/shared/ui/layout';
import Favorites from '../../src/features/favorites';

const FavoritesPage: FC = () => {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
};

export default FavoritesPage;
