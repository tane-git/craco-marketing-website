import React from 'react'
import cx from 'classnames'

import sectionStyles from '../style.module.less'
import styles from './style.module.less'

import { reasons } from './reasons'
import { Reason } from './Reason'
import { Button } from 'antd'

export const Why: React.FC = () => {
  return (
    <div className={sectionStyles.section}>
      <span className={sectionStyles.title} >
        Why Use SubQuery
      </span>
      <div className={styles.reasons}>
        {reasons.map(reason => {
          return (
            <Reason {...reason} />
          )
        })}
      </div>
      <div className={styles.button}>
        <Button type='primary' size='large' shape='round'>
          Find out more
        </Button>
      </div>
    </div>
  )
}