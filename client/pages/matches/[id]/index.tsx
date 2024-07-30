import React, { FC } from 'react';
import { Layout } from '../../../src/Components/Layout';
import { MatchesDetail } from '../../../src/Components/MatchesDetail';
import { store } from '../../../src/redux/store';
import { head2Head } from '../../../src/redux/Slices/Games';
import { GamesState } from '../../../src/types/Games';

const MatchesDetailPage: FC<{ initialMatchesState: GamesState }> = ({ initialMatchesState }) => {
  return (
    <Layout>
      <MatchesDetail initialMatchesState={initialMatchesState} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  await store.dispatch(head2Head(id));
  const state = store.getState();
  const initialMatchesState: GamesState = {
    ...state.matches,
    status: state.matches.status ?? null,
    errorCode: state.matches.errorCode ?? null,
    head2head: state.matches.head2head ?? null,
    games: state.matches.games ?? null,
  };
  head2Head;
  return {
    props: {
      initialMatchesState,
    },
  };
};
export default MatchesDetailPage;
