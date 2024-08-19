import React, { FC } from 'react';
import Layout from '../../../src/components/Layout';
import  Persons  from '../../../src/Components/Persons';

const PersonsDetailPage: FC = () => {
  return (
    <Layout>
      <Persons />
    </Layout>
  );
};

export default PersonsDetailPage;
