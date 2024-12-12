import React, { FC, useState } from 'react';
import { Table } from '@/types/CompetitionsTypes';
import CTable from '@/components/ui/Table';
import styles from '../competitions.module.scss';
import Button from '@/components/ui/Button';

interface ICompetitionLeagueProps {
  data: Table[];
}

const CompetitionLeague: FC<ICompetitionLeagueProps> = ({ data }) => {
  const middleIdx = data.length / 2;
  const [list, setList] = useState<Table[]>(data.slice(0, middleIdx));

  const loadMoreHandle = () => {
    setList((prev) => [...prev, ...data.slice(middleIdx, data.length)]);
  };

  return (
    <section className={styles.table}>
      <CTable list={list} />
      {list.length <= middleIdx && <Button onClick={loadMoreHandle} title="Загрузить ещё" />}
    </section>
  );
};
export default CompetitionLeague;
