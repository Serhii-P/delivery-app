import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import FormBlock from '../FormBlock/FormBlock';

const EditRequest = () => {
  const params = useParams();
  const navigate = useNavigate();
  const deliveryItems = useSelector((state) => state.request);
  console.log(deliveryItems.filter(request => console.log(request)));

  const currentRequest = deliveryItems.filter(request => request.id === Number(params.id))

  const { id, from, to, type, description, departureDate } = currentRequest[0];
  const [valuesData, setValuesData] = useState({
    id, from, to, type, description, departureDate, date: new Date()
  })

  return (
    <div>
      <h1>EditRequest</h1>
      {valuesData &&
        <FormBlock valuesData={valuesData} setValuesData={setValuesData} navigate={navigate} />
      }
    </div>
  )
}

export default EditRequest