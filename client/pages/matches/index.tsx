import React, { FC } from 'react';
import { Layout } from '../../src/UI/Layout';
import { Matches } from '../../src/Components/Matches';
import { DateFilter } from '../../src/Common/DateFilter';

const MatchesPage: FC = () => {
  return (
    <Layout>
      <DateFilter />
      <Matches />
    </Layout>
  );
};

export default MatchesPage;
