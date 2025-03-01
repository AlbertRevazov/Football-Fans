import React from 'react';
import styles from './header.module.scss';

interface HeaderProps {
  name: string;
  season: string;
  emblem: string;
}

const Header: React.FC<HeaderProps> = ({ name, season, emblem }) => {
  return (
    <header className={styles.header}>
      <img loading="lazy" src={emblem} alt="competition emblem" className={styles.emblem} />
      <div className={styles.info}>
        <h1 className={styles.title}>{name}</h1>
        <h4 className={styles.season}>Season: {season}</h4>
      </div>
    </header>
  );
};

export default Header;
