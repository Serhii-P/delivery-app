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
import { editRequest } from '../../redux/slices/requestSlice';


const FormBlock2 = ({valuesData, setValuesData, navigate}) => {
  const dispatch = useDispatch();


console.log(valuesData)
  return (
    <div>
      <Formik
        initialValues={{
          from: valuesData.from, 
          to: valuesData.to,
          type: valuesData.type,
          description: valuesData.description,
          date: valuesData.date,
          departureDate: valuesData.departureDate
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={({from, to, type, description, date, departureDate }) => {
          dispatch(editRequest({id: valuesData.id, from, to, type, description, date, departureDate}))

          setValuesData({from, to, type, description, date, departureDate})
          console.log(from, to, type, description, date, departureDate);
          navigate('/')
        }}
      >
        {({ handleChange, values, touched, errors, setFieldValue , handleBlur}) => (
          <Form>
            <Autocomplete
              id="from"
              name="from"
              options={cities}
              
               value={values.from ? values.from : ''}
              // inputValue={inputValue}
              style={{ width: 300 }}
              onChange={(event, value, reason) => {
                console.log(event)
                console.log(value)
                console.log(reason)
                // if (reason === 'selectOption') {
                  setFieldValue("from", value?.label);

                // }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  margin="normal"
                  label="From"
                  fullWidth
                  //  value={values.from ? values.from : ''}
                  // value={values?.from}
                  // defaultValue={[values.from[0]]}
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
               value={values.to ? values.to : ''}
              // inputValue={inputValue2}
              // getoptionselected={(option, value) => option.iso === value.iso}
              style={{ width: 300 }}
              onChange={(event, value, reason) => {
                // if (reason === 'selectOption') {

                  setFieldValue("to", value?.label);
                // }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  margin="normal"
                  label="To"
                  fullWidth
                  //  value={values.to ? values.to : ''}
                  // value={values?.to}
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

export default FormBlock2;