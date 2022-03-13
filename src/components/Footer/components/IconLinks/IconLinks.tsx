import React from 'react'
import styles from './style.module.less'
import icon_1 from './icons/icon_1.svg'
import icon_2 from './icons/icon_2.svg'
import icon_3 from './icons/icon_3.svg'
import icon_4 from './icons/icon_4.svg'
import icon_5 from './icons/icon_5.svg'
import icon_6 from './icons/icon_6.svg'
import icon_7 from './icons/icon_7.svg'
// TODO: find a more programatic way to do this...

export const IconLinks: React.FC = () => {
  // const icons = []
  // for (let i = 1; i < 8; i++) {
    // icons.push('./icons/icon_' + i + '.svg')
  // }
  return (
    <div className={styles.icons}>
    {/* why isnt this img working? */}
    {/* <img src='./icons/icon_1.svg' alt='test' /> */}
      {/* {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          // alt={'An icon link to a Subquery social media platform'}
          alt={icon}
          className={'icon'}
        />
      ))} */}
      <img src={icon_1} alt='A social media icon' className={styles.icon} />
      <img src={icon_2} alt='A social media icon' className={styles.icon} />
      <img src={icon_3} alt='A social media icon' className={styles.icon} />
      <img src={icon_4} alt='A social media icon' className={styles.icon} />
      <img src={icon_5} alt='A social media icon' className={styles.icon} />
      <img src={icon_6} alt='A social media icon' className={styles.icon} />
      <img src={icon_7} alt='A social media icon' className={styles.icon} />
    </div>
  )
}