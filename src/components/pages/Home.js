import React from 'react'
import DeliveryList from '../DeliveryList/DeliveryList'
import RequestBlock from '../RequestBlock/RequestBlock'

const Home = () => {
  return (
    <div>
      <RequestBlock />
      <DeliveryList />
    </div>
  )
}

export default Home