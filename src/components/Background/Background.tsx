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
  const [delegator, setDelegator] = useState('')
  const [lastCall, setLastCall] = useState(0)

  const handleScroll = () => {
    console.log('scrolling')
    let now = new Date().getTime()
    if (now - lastCall > 1000) {
      console.log('delegating')
      setLastCall(now)
      // setDelegator(delegator === delegator0 ? delegator1 : delegator0)
      setDelegator(delegator === styles.iRobot ? '' : styles.iRobot)
    }
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
         <img src={delegator0} alt="A SubQuery Delegator Robot" className={delegator} /> 
         {/* <img src={delegator1} alt="A SubQuery Delegator Robot" className={delegator} />  */}
        </div>
      </div>
    </div>
  )
}