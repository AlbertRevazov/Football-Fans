import React, { FC } from 'react';
import { Layout } from '../../src/Components/Layout';
import { Matches } from '../../src/Components/Matches';
import { DateFilter } from '../../src/Common/DateFilter';
import { getMatchesList } from '../../src/redux/Slices/Games';
import { store } from '../../src/redux/store';
import { GamesState } from '../../src/types/Games';

const MatchesPage: FC<{ initialMatchesState: GamesState }> = ({ initialMatchesState }) => {
  return (
    <Layout>
      <DateFilter />
      <Matches initialMatchesState={initialMatchesState} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  await store.dispatch(getMatchesList());
  const state = store.getState();
  const initialMatchesState: GamesState = {
    ...state.matches,
    status: state.matches.status ?? null,
    errorCode: state.matches.errorCode ?? null,
    head2head: state.matches.head2head ?? null,
    games: state.matches.games ?? null,
  };
  return {
    props: {
      initialMatchesState,
    },
  };
};

export default MatchesPage;
