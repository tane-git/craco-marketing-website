import React from 'react'

import sectionStyles from '../style.module.less'

export const Protocols: React.FC = () => {
  return (
    <div className={sectionStyles.section}>
      <span className={sectionStyles.title}>Supported Protocols List</span>
      <p className={sectionStyles.text}>
        The future is multi-chain, SubQuery is no different
      </p>
    </div>
  )
}