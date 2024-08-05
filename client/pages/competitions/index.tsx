import React, { FC } from 'react';
import { Layout } from '../../src/UI/Layout';
import { Competitions } from '../../src/Components/Competitions';

const CompetitionsPage: FC = () => {
  return (
    <Layout>
      <Competitions />
    </Layout>
  );
};

export default CompetitionsPage;
