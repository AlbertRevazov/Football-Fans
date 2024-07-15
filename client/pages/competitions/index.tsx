import React, { FC } from 'react';
import { Layout } from '../../src/Components/Layout';
import { Competitions } from '../../src/Components/Competitions';

const CompetitionsPage: FC = () => {
  return (
    <Layout>
      <Competitions />
    </Layout>
  );
};

export default CompetitionsPage;
