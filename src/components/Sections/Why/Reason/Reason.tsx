import React from 'react'

import styles from '../style.module.less'

export interface IProps {
  title: string
  icon: string
  description: string
  link?: {
    text: string
    url: string
  }
}

export const Reason: React.FC<IProps> = (
  {
    title,
    icon,
    description,
    link
  }
) => {
  return (
    <div className={styles.reason}>
      <img className={styles.image} src={icon} alt='Icon representing this reason to use SubQuery' />
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>
        {description}
      </p>
      {!!link && (
        <a href={link.url}>{link.text}</a>
      )}
    </div>
  )
}