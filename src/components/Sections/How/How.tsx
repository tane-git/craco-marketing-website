import React from 'react'
import cx from 'classnames'

import sectionStyles from '../style.module.less'
import styles from './style.module.less'

// Images
import consumer from './images/consumer.png'
import graphql from './images/graphql.png'
import { Button } from 'antd'

export const How: React.FC = () => {
  return (
    <div className={sectionStyles.section}>
      <div className={styles.subSection}>
        <div className={styles.info} >
          <span className={styles.title}>
            How does it work?
          </span>
          <p>
            Sed ullamcorper elementum nunc quis luctus. Phasellus euismod ultricies ex, et vehicula nulla commodo vel.  
          </p>
          <Button type="primary" shape="round">
            Get started now
          </Button>
        </div>
        <div className={styles.image}>
          <img src={graphql} alt='Example code for graphql' /> 
        </div>
      </div>
      <div className={cx(styles.subSection, styles.network)}>
        <img src={consumer} alt='A SubQuery Consumer Robot' />
        <div className={styles.info} >
          <span className={styles.title}>
            SubQuery Network
          </span>
          <p>
            Fusce velit augue, euismod vitae aliquam at, condimentum eget erat. Nam viverra, arcu vitae venenatis finibus, nulla tortor cursus enim. Donec ac erat nunc. Pellentesque a ex vitae justo mollis auctor.
          </p>
          <Button type="primary" shape="round">
            Find out more
          </Button>
        </div>
      </div>
    </div>
  )
}