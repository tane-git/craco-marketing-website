import React from 'react'
import cx from 'classnames'

import sectionStyles from '../style.module.less'
import styles from './style.module.less'

import { reasons } from './Reasons'
import { Reason } from './Reason'

export const Why: React.FC = () => {
  return (
    <div className={sectionStyles.section}>
      <span className={sectionStyles.title} >
        Why Use SubQuery
      </span>
      <div className={sectionStyles.reasons}>
        {reasons.map(reason => {
          return (
            <Reason {...reason} />
          )
        })}
      </div>
    </div>
  )
}