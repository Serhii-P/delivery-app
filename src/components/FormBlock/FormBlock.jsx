import React from 'react';

import { Autocomplete, Button, MenuItem, TextareaAutosize, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Form, Formik } from 'formik';
import { cities } from '../../data/cities';
import { parselTypes } from '../../data/types';
import { validationSchema } from './validationSchema';
import { useDispatch } from 'react-redux';
import { createRequest } from '../../redux/slices/requestSlice';


const FormBlock = () => {
  const dispatch = useDispatch();

let randomId = Math.floor(Math.random() * 1000);
console.log(randomId)

  return (
    <div>
      <Formik
        initialValues={{
          from: '', 
          to: '',
          type: '',
          description: '',
          departureDate: new Date(),
          date: new Date(),
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={({ from, to, type, description, date, departureDate }, { resetForm }) => {
          dispatch(createRequest({
            id: Math.floor(Math.random() * 1000),
            from: from,
            to: to,
            type: type,
            description: description,
            departureDate: departureDate,
            date: date,
            
            // id: randomId, from: 'Mykolaiv', to: 'Sumy', type: 'other smth', 
            // description: 'some text3', date: date, departureDate: '10.07.2022'
          }))
          resetForm({
            from: '', 
            to: '',
            type: '',
            description: '',
            departureDate: new Date(),
            date: new Date(),
          })
          // dispatch(createRequest({
          //   id: randomId, from: from, to: to, type: type, 
          //   description: description, date: date, departureDate: departureDate
          // }))
          console.log(from, to, type, description, date, departureDate);
        }}
      >
        {({ handleChange, values, touched, errors, setFieldValue , handleBlur}) => (
          <Form>
            <Autocomplete
              id="from"
              name="from"
              options={cities}
              value={values?.from}
              defaultValue={''}
              style={{ width: 300 }}
              onChange={(event, value) => {
                setFieldValue("from", value?.label);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  margin="normal"
                  label="From"
                  fullWidth
                  onBlur={handleBlur}
                  helperText={touched.from && errors.from}
                  error={touched.from && Boolean(errors.from)}
                />
              )}
            />

            <Autocomplete
              id="to"
              name="to"
              options={cities}
              value={values?.to}
              defaultValue={''}
              style={{ width: 300 }}
              onChange={(event, value) => {
                setFieldValue("to", value?.label);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  margin="normal"
                  label="To"
                  fullWidth
                  onBlur={handleBlur}
                  helperText={touched.to && errors.to}
                  error={touched.to && Boolean(errors.to)}
                />
              )}
            />

        <div className="form__control">
        <TextField
         style={{ width: 300 }}
          select
          label="Choose a type..."
          margin="normal"
          name='type'
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.type && errors.type}
          error={touched.type && Boolean(errors.type)}
        >
          {parselTypes.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

          </div>
          <div className="form__control">

          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Parcel description"
            margin="normal"
            name='description'
            value={values.description}
            onChange={handleChange}
          />
          </div>
          <div className="form__control">

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Departure Date"
              minDate = {new Date()}
              id="departureDate"
              name="departureDate"
              value={values?.departureDate}
              inputFormat="dd.MM.yyyy"
              onChange={(val) => {
                setFieldValue('departureDate', val);
            }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </div>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormBlock;