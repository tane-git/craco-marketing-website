import React from 'react'
import styles from './styles/style.module.less'
import delegator from './images/robots/delegator.svg'
import indexer from './images/robots/indexer.svg'

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
        <div className={styles.indexer}>
         <img src={indexer} alt="A SubQuery Indexer Robot" /> 
        </div>
        <div className={styles.delegator}>
         <img src={delegator} alt="A SubQuery Delegator Robot" /> 
        </div>
      </div>
    </div>
  )
}