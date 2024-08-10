import React, { FC } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface ICardProps {
  league: {
    id: number;
    crest: string;
    title: string;
  };
  link: string;
}

const Card: FC<ICardProps> = ({ league, link }) => {
  return (
    <Link href={link}>
      <div className={styles.container}>
        <img src={league.crest} alt={league.title} loading="lazy" className={styles.crest} />
        <h3 className={styles.title}>{league.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
