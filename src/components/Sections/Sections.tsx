import React from 'react'
import { Protocols } from './Protocols'
import styles from './style.module.less'
import { What } from './What'


export const Sections: React.FC = () => {
  return (
    <div className={styles.sections}>
      <What />
      <Protocols />
      {/* <How /> */}
      {/* <Why /> */}
    </div>
  ) 
}