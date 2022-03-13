import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.less'
import delegator0  from './images/robots/delegator.svg'
import delegator1 from './images/robots/delegator1.svg'
import indexer from './images/robots/indexer.svg'

export interface IProps {
  children: React.ReactNode 
}

export const Background: React.FC<IProps> = ({
  children
}) => {
  const [delegator, setDelegator] = useState(delegator0)
  
  const handleScroll = () => {
    delegator === delegator0 ? setDelegator(delegator1) : setDelegator(delegator0)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

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