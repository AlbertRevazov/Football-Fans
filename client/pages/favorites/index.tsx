import React, { FC } from 'react';
import  Layout  from '../../src/UI/Layout';
import Favorites from '../../src/Components/Favorites';

const FavoritesPage: FC = () => {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
};

export default FavoritesPage;
