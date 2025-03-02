import React, { FC, useState } from 'react'
import styles from './write-section.module.scss'
import Button from '@/shared/ui/button'

const WriteSection: FC = () => {
  const [message, setMessage] = useState<string>('')

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Write to Us</h2>
          <p className={styles.subtitle}>
            Your suggestions and comments are always welcome. Contact us to improve your experience.
          </p>
        </header>
        <input
          className={styles.input}
          type="text"
          placeholder="Your message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button title="Send" type="submit" minWidth="115px" disabled={!message} />
      </div>
    </section>
  )
}

export default WriteSection
