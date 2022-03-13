import React from 'react'
import { Header } from '../Header'
import styles from './styles/style.module.less'

export interface IProps {
  children: React.ReactNode 
}

export const Background: React.FC<IProps> = ({
  children
}) => {
  return (
    <div className={styles.background}>
      {children}
      <div className={styles.backgrounds}>
        <div className={styles.leftBackground}></div>
        <div className={styles.centerBackground}></div> 
        <div className={styles.rightBackground}></div>
      </div>
    </div>
  )
}