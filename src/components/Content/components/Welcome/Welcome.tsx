import React from 'react';
import styles from './style/style.module.less';
import Robots from './images/subQueryRobots.svg';

export const Welcome: React.FC = () => {
  return (
    <>
      <div className={styles.welcome}>
        Query Decentralised Data <span className={styles.gradient}>Faster</span> 
      </div>
      <div className={styles.robots}>
        {/* <img src={Robots} alt='Diagram of how SubQuery works, using a robot analogy' /> */}
      </div>
    </>
  )
}