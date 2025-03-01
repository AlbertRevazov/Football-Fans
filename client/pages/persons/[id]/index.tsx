import React, { FC } from 'react';
import Layout from '../../../src/shared/ui/layout';
import Persons from '../../../src/features/persons';

const PersonsDetailPage: FC = () => {
  return (
    <Layout>
      <Persons />
    </Layout>
  );
};

export default PersonsDetailPage;
