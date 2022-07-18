import * as yup from 'yup';
import { Autocomplete, Button, TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { parselTypes } from '../../data/types';
import { cities } from '../../data/cities';



const currentDate = new Date().toISOString().split('T')[0]; // 2020-00-00
const clearFormat = currentDate.split("-").reverse().join("-"); // 00-00-2020
const creationFormat = new Date().toLocaleString();

// console.log(creationFormat );

const Form = () => {
const [deliveryFrom, setDeliveryFrom] = useState('');
const [deliveryTo, setDeliveryTo] = useState('');
const [description, setDescription] = useState('');
const [parselType, setParcelType] = useState(0);
const [date, setDate] = useState(currentDate);

const dateHandler = (event) => {
console.log(typeof event.target.value);
}

  const optionType = parselTypes.map(option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  ));

  const submitHandler = (event) => {
    event.preventDefault();

    const deliveryInfo = {
      from: deliveryFrom,
      to: deliveryTo,
      type: parselType,
      description: description || '',
      deliveryDate: date,
      createdAt: creationFormat
    }

    console.log(deliveryInfo);
  }

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
      from: yup
      .string('Enter from')
      .required('Field is required'),
      to: yup
      .string('Enter from')
      .required('Field is required'),
  });
  
  // const WithMaterialUI = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: 'foobar@example.com',
  //       password: 'foobar',
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: (values) => {
  //       console.log(values);
  //       console.log(JSON.stringify(values, null, 2));
  //     },
  //   });
  // }

 const formik = useFormik({
     initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
      from: '',
      to: ''
    },
    validationSchema: validationSchema,
     onSubmit: values => {
      console.log(values);
     },
   });



  return (
    <div>
      {/* <Formik
        initialValues={{ cityId: 1 }}
        onSubmit={({ cityId }) => {
          console.log(cityId);
        }}
      >
        {({ handleChange, values, setFieldValue }) => (
          <Form>
            <Autocomplete
              id="cityId"
              name="cityId"
              options={cities}
              groupBy={(option) => option.state}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              onChange={(event, value) => {
                setFieldValue("cityId", value.value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  margin="normal"
                  label="Cities"
                  fullWidth
                  value={values?.cityId}
                />
              )}
            />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}


      </Formik> */}

  <form onSubmit={formik.handleSubmit}>
    {/* <div className="formControl">
      <TextField
        fullWidth
        id="from"
        name="from"
        label="from"
        value={formik.values.from}
        onChange={formik.handleChange}
        error={formik.touched.from && Boolean(formik.errors.from)}
        helperText={formik.touched.from && formik.errors.from}
      />
    </div> */}

    <div className="formControl">
    <Autocomplete
      options={cities}
      value={formik.values.from}
      onChange={formik.handleChange}
      // getOptionLabel={option => console.log(option)}
      sx={{ width: 300 }}
      renderInput={(params) => 
      <TextField 
        {...params} 
        label="Delivery from" 
        name="from"
        id="from"
        helperText={formik.touched.from && formik.errors.from}
        error={formik.touched.from && Boolean(formik.errors.from)}
        // value={formik.values.from}
      />
    }
    />
    </div>
    {/* <div className="formControl">
      <TextField
        fullWidth
        id="to"
        name="to"
        label="to"
        value={formik.values.to}
        onChange={formik.handleChange}
        error={formik.touched.to && Boolean(formik.errors.to)}
        helperText={formik.touched.to && formik.errors.to}
      />
    </div> */}

    {/* <div className="formControl">
    <Autocomplete
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => 
      <TextField 
        {...params} 
        label="Delivery to" 
        name="to"
        value={formik.values.to}
        onChange={formik.handleChange}
        error={formik.touched.to && Boolean(formik.errors.to)}
        helperText={formik.touched.to && formik.errors.to}
      />
    }
    />
    </div> */}


<div className="formControl">
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
    </div>

    <TextField
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
    />
    <Button color="primary" variant="contained" type="submit">
      Submit
    </Button>
  </form>
</div>

    // <form onSubmit={submitHandler}>
    //   <div className="form__control">
    //     <label>
    //       From:
    //       <input type="text" value={deliveryFrom}
    //         onChange={(e) => setDeliveryFrom(e.target.value)} />
    //     </label>

    //   </div>

    //   <div className="form__control">
    //     <label>
    //       To:
    //       <input type="text" value={deliveryTo}
    //         onChange={(e) => setDeliveryTo(e.target.value)} />
    //     </label>

    //   </div>

    //   <div className="form__control">
    //     <label>
    //       Type of parcel:
    //       <select value={parselType} onChange={(e) => setParcelType(e.target.value)}>
    //         <option value={0} >Choose a type...</option>
    //         {optionType}
    //       </select>
    //     </label>

    //   </div>

    //   <div className="form__control">
    //     <label>
    //       Parcel description:
    //       <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
    //     </label>

    //   </div>


    //   <div className="form__control">
    //     <label >Date</label>
    //     <input type="date"
    //       min={currentDate}
    //       max="2023-12-31"
    //       value={date}
    //       onChange={(e) => setDate(e.target.value)}
    //       // onChange={dateHandler}
    //     />
    //   </div>
    //   <button type='submit'>Order</button>
    // </form>
   )
}

export default Form;