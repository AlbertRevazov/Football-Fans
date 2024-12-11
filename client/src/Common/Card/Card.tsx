import React, { FC } from 'react';
import Link from 'next/link';
import styles from './Cards.module.scss';

interface ICardProps {
  data: {
    id: number;
    crest: string;
    title: string;
  };
  isActive?: boolean;
  link: string;
}

const Card: FC<ICardProps> = ({ data, link, isActive }) => {
  const isLeague = link.includes('competitions');
  return (
    <Link
      className={styles.container}
      href={link}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      <div className={styles.card}>
        <img className={styles.crest} src={data?.crest} alt={data?.title} loading="lazy" />
      </div>
      {!isLeague && <h3 className={styles.title}>{data?.title}</h3>}
    </Link>
  );
};

export default Card;
