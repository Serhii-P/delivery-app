import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editRequest } from '../../redux/slices/requestSlice';
import FormBlock2 from '../FormBlock/FormBlock2'
import FormBlock3 from '../FormBlock/FormBlock3';

const EditRequest = () => {
const params = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();
const deliveryItems = useSelector((state) => state.request);
console.log(deliveryItems.filter(request => console.log(request)));


const currentRequest = deliveryItems.filter(request => request.id === Number(params.id))

console.log(currentRequest);

const {id, from, to, type, description, departureDate} = currentRequest[0];
const [valuesData, setValuesData] = useState({
  id, from, to, type, description, departureDate, date: new Date()
})
console.log(valuesData)

return (
    <div>
      <h1>EditRequest</h1>
      {/* <FormBlock2 valuesData={valuesData} setValuesData={setValuesData} navigate={navigate}/> */}
      { valuesData && 
      <FormBlock3 valuesData={valuesData} setValuesData={setValuesData} navigate={navigate}/>
      }
    </div>
  )
}

export default EditRequest