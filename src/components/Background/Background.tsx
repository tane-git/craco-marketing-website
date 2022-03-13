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
  // const [robot, setRobot] = useState('')
  // const [robot1, setRobot1] = useState(styles.iRobot)
  const [delegator, setDelegator] = useState(delegator0)
  const [lastCall, setLastCall] = useState(0)

  const handleScroll = () => {
    console.log('scrolling')
    let now = new Date().getTime()
    if (now - lastCall > 1000) {
      console.log('delegating')
      setLastCall(now)
      setDelegator(delegator === delegator0 ? delegator1 : delegator0)
      // setRobot(robot === styles.iRobot ? '' : styles.iRobot)
      // setRobot1(robot1 === styles.iRobot ? '' : styles.iRobot)
    }
  }

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll)
    var timer: NodeJS.Timeout | null = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);        
        }
        timer = setTimeout(handleScroll, 10);
    }, false);
  })



  // $(window).bind("scrollstart",function(){
  //   if(scroll_interval){clearInterval(scroll_interval);};
  //   scroll_interval = setInterval(function(){
  //     // add Javascript here, it's executed every 10ms as long as the user is scrolling
  //   },10);
  // });

  // $(window).bind("scrollstop",function(){
  //     clearInterval(scroll_interval);
  // });

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
         {/* <img src={delegator0} alt="A SubQuery Delegator Robot" className={robot} />  */}
         {/* <img src={delegator1} alt="A SubQuery Delegator Robot" className={robot1} />  */}
         <img src={delegator} alt="A SubQuery Delegator Robot" /> 
        </div>
      </div>
    </div>
  )
}