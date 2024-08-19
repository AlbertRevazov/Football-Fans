import React, { FC } from 'react';
import Layout from '../../src/components/Layout';
import DateFilter from '../../src/Common/DateFilter';
import Matches from '../../src/components/Matches';

const MatchesPage: FC = () => {
  return (
    <Layout>
      <DateFilter />
      <Matches />
    </Layout>
  );
};

export default MatchesPage;
