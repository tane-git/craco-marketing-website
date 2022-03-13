import React from 'react'
import styles from './styles/style.module.less'

export const Background: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.leftBackground}></div>
      <div className={styles.centerBackground}></div> 
      <div className={styles.rightBackground}></div>
    </div>
  )
}