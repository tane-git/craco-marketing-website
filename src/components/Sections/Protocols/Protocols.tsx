import React from 'react'
import cx from 'classnames'

import sectionStyles from '../style.module.less'
import styles from './style.module.less'

export const Protocols: React.FC = () => {
  return (
    <div className={cx(sectionStyles.section, styles.section)}>
      <span className={sectionStyles.title}>Supported Protocols List</span>
      <p className={sectionStyles.text}>
        The future is multi-chain, SubQuery is no different
      </p>
    </div>
  )
}