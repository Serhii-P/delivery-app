import React from 'react';
import FormBlock from '../FormBlock/FormBlock';
import Form2 from '../FormBlock/Form2';

import FormBlock3 from '../FormBlock/FormBlock3';
import styles from './RequestBlock.module.scss';

const RequestBlock = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Request creation form</h2>
      {/* <FormBlock /> */}
      <FormBlock3 />
      {/* <Form2 /> */}
    </div>
  )
}

export default RequestBlock