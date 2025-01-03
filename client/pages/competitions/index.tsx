import React, { FC } from 'react';
import Layout from '../../src/components/ui/layout';
import Competitions from '../../src/components/competitions';

const CompetitionsPage: FC = () => {
  return (
    <Layout>
      <Competitions />
    </Layout>
  );
};

export default CompetitionsPage;
