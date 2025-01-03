import React, { FC } from 'react';
import Layout from '../../../src/components/ui/layout';
import Persons from '../../../src/components/persons';

const PersonsDetailPage: FC = () => {
  return (
    <Layout>
      <Persons />
    </Layout>
  );
};

export default PersonsDetailPage;
