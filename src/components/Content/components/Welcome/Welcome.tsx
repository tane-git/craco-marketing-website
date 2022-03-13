import React from 'react';
import styles from './style/style.module.less';

export const Welcome: React.FC = () => {
  return (
    <div className={styles.welcome}>
      Query Decentralised Data <span className={styles.gradient}>Faster</span> 
    </div>
  )
}