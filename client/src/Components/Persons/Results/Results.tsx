import React, { FC, useState } from 'react';
import { PMatches } from '@/types/PersonsTypes';
import Button from '@/components/ui/button';
import Link from 'next/link';
import styles from './results.module.scss';

interface IResultsProps {
  data: PMatches[];
}

const Results: FC<IResultsProps> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.results}>
      <Button title={open ? 'Hide games list' : 'Show games list'} onClick={() => setOpen(!open)} />

      {open && (
        <>
          <h2 className={styles.title}>Teams Played Against</h2>
          <ul className={styles.list}>
            {data.map((item, index) => (
              <li className={styles.li} key={index}>
                Vs
                <Link href={`/teams/${item.id}`} className={styles.team}>
                  {item.name}
                </Link>
                <span className={styles.score}>{item.score}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Results;
