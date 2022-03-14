import React from 'react';
import styles from './style.module.less';
import sectionStyles from '../style.module.less';
// not sure on wether I will use an individual style.module for each section,
// or just have one,
// or a mix of both?
// styles or sectionStyles or both?

export const What: React.FC = () => {
  return (
    <div className={sectionStyles.section}>
    {/* <div className={styles.what}> */}
      <span className={sectionStyles.title}>What is SubQuery?</span>
      {/* <span className={styles.title}>What is SubQuery?</span> */}
      <p className={sectionStyles.text}>
      {/* <p className={styles.p}> */}
        Our Mission is to help others create products that allow us to move to a decentralised future faster. SubQuery is a blockchain developer toolkit and the backbone of web3 infrastructure. SubQuery is facilitating an open web3 data revolution
      </p>
    </div>
  )
}