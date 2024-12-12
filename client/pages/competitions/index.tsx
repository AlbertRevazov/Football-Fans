import React, { FC } from 'react';
import Layout from '../../src/pages/layout';
import Competitions from '../../src/components/competitions';

const CompetitionsPage: FC = () => {
  return (
    <Layout>
      <Competitions />
    </Layout>
  );
};

export default CompetitionsPage;
