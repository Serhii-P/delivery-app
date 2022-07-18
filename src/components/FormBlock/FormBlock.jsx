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
import { createRequest, editRequest } from '../../redux/slices/requestSlice';

import styles from './FormBlock.module.scss';

const FormBlock = ({valuesData, navigate}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <Formik
        initialValues={valuesData ? {
        from: valuesData.from, 
        to: valuesData.to,
        type: valuesData.type,
        description: valuesData.description,
        date: valuesData.date,
        departureDate: valuesData.departureDate
        } : {
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
          if (valuesData) {
            dispatch(editRequest({id: valuesData.id, from, to, type, description, date, departureDate}))
            navigate('/')
          } else {
              dispatch(createRequest({
              id: Math.floor(Math.random() * 1000),
              from: from,
              to: to,
              type: type,
              description: description,
              departureDate: departureDate,
              date: date,
            }))
            resetForm({
              from: '', 
              to: '',
              type: '',
              description: '',
              departureDate: new Date(),
              date: new Date(),
            })
          }
        }}
      >
        {({ handleChange, values, touched, errors, setFieldValue , handleBlur}) => (
          <Form className={styles.form}>
            <div className={styles.formControl}>
              <Autocomplete
                id="from"
                name="from"
                options={cities}
                value={values.from ?? ''}
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
            </div>
            <div className={styles.formControl}>
              <Autocomplete
                id="to"
                name="to"
                options={cities}
                value={values.to ?? ''}
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
              </div>
              <div className={styles.formControl}>
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
              <div className={styles.formControl}>

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

              <div className={styles.formControl}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Parcel description"
                  margin="normal"
                  name='description'
                  style={{ width: "100%" }}
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
         
            <Button variant="contained" color="primary" type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormBlock;