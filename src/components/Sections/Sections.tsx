import React from 'react'
import styles from './style.module.less'
import { What } from './What'
import { Protocols } from './Protocols'
import { How } from './How'
import { Why } from './Why'


export const Sections: React.FC = () => {
  return (
    <div className={styles.sections}>
      <What />
      <Protocols />
      <How />
      <Why />
    </div>
  ) 
}