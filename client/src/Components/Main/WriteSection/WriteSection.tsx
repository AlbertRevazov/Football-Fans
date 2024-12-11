import React, { FC, useState } from 'react';
import CButton from '@/common/CButton';
import styles from './WriteSection.module.scss';

const WriteSection: FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Write to Us</h2>
          <p className={styles.description}>
            Your suggestions and comments are always welcome. Contact us to improve your experience.
          </p>
        </header>
        <input
          className={styles.input}
          type="text"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <CButton title="Send" type="submit" minWidth="115px" disabled={!message} />
      </div>
    </section>
  );
};

export default WriteSection;
