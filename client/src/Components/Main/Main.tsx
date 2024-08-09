import React, { FC } from 'react';
import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <article className={styles.about}>
          <div className={styles.titleWrap}>
            <p className={styles.title}>football fans</p>
            <p className={styles.subtitle}>
              это площадка, которая объединяет настоящих любителей футбола. Наш сайт предназначен
              для всех, кому интересна эта увлекательная игра, ведь футбол – это не просто спорт,
              это целый мир, полный эмоций, страсти и соперничества.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Main;
