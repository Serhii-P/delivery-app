import React from 'react';
import FormBlock from '../FormBlock/FormBlock';
import styles from './RequestBlock.module.scss';

const RequestBlock = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Request creation form</h2>
      <FormBlock />
    </div>
  )
}

export default RequestBlock