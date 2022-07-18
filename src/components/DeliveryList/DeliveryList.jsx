import React from 'react';
import { useSelector } from 'react-redux';
import DeliveryCard from '../DeliveryCard/DeliveryCard';

// const deliveryItems = [
//   {id: 1, from: 'Kyiv', to: 'Odessa', type: 'other', 
//     description: 'some text', date: new Date(), departureDate: '07.07.2022'  },
//     {id: 2, from: 'Lviv', to: 'Lutsk', type: 'other', 
//     description: 'some text2', date: new Date(), departureDate: '08.07.2022'  },
// ];


// const cardData = deliveryItems.map(item => (
//   <DeliveryCard key={item.id} {...item}/>
// ))
import styles from './DeliveryList.module.scss';


const DeliveryList = () => {
  const deliveryItems = useSelector((state) => state.request);

  return (
    <>
      {/* {deliveryItems.length > 0 ? 
        {cardData}
        : <p>No deliveries yet</p>} */}
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