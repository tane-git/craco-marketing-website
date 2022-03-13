import React from 'react'
import styles from './styles/style.module.less'
import logo from './images/logo.svg'
import { Dropdown } from './components/Dropdown'

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="SubQuery Logo" height={48} />    
      </div>
      <div className={styles.dropdown}>
        <Dropdown />
      </div>
      <div className={styles.links}>
        <span>Build</span>  
        <span>Network</span>  
        <span>Managed Services</span>  
      </div>
    </div>
  )
}