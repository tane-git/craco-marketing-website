import React from 'react'
import { IconLinks } from './components'
import styles from './style/style.module.less'

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer} >
      <div className={styles.socialMedias} >
        <span className={styles.text}>Join the Open Web3 Data Revolution</span>
        <IconLinks />
      </div>
    </div>
  )
}