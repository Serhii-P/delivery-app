import React from 'react';
import { useSelector } from 'react-redux';
import DeliveryCard from '../DeliveryCard/DeliveryCard';

import styles from './DeliveryList.module.scss';

const DeliveryList = () => {
  const deliveryItems = useSelector((state) => state.request);

  return (
    <>
      { deliveryItems.length > 0 ? deliveryItems.map(item => (
        <DeliveryCard  {...item} key={item.id}/>
        ))
        : <div>
          <hr />
          <h1 className={styles.title}>No deliveries yet</h1>
        </div>
      }
    </>
  )
}

export default DeliveryList