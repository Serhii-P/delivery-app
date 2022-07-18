import * as yup from 'yup';
import React from 'react';

import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field, Form, Formik } from 'formik';
import { cities } from '../../data/cities';
import { parselTypes } from '../../data/types';

const citiesList = cities.map(city => city.label);
const types = parselTypes.map(type => type.name);
console.log(types)
const foo = [
  {id: 1, name: 'gadgets'},
  {id: 2, name: 'drinks'},
  {id: 3, name: 'clothes'},
  {id: 4, name: 'medicines'},
  {id: 5, name: 'other'},
];

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const Form2 = () => {

  const validationSchema = yup.object({
    from: yup
      .string('Enter from')
      .required('Field is required')
      .oneOf(citiesList, 'Choose the city from the list'),
    to: yup
      .string('Enter from')
      .oneOf(citiesList, 'Choose the city from the list')
      .required('Field is required'),
    type: yup
      .string('Choose value')
      // .oneOf(types, 'Choose type from the list')
      .required('Field is required'),
    // email: yup
    //   .string('Enter your email')
    //   .email('Enter a valid email')
    //   .required('Email is required'),
    // password: yup
    //   .string('Enter your password')
    //   .min(8, 'Password should be of minimum 8 characters length')
    //   .required('Password is required'),
  });

  const optionType = parselTypes.map(option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  ));

  

  return (
    <div>
          <Formik
        // initialValues={{ cityId: 1 }}
        initialValues={{
          from: '', 
          to: '',
          type: '',
          description: '',
          // date: new Date(),
          departureDate: Date.now()
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={({ from, to, type, description, departureDate }) => {
          console.log(from, to, type, description, departureDate);
        }}
      >
        {({ handleChange, values, touched, errors, setFieldValue , handleBlur}) => (
          <Form>
            <Autocomplete
              id="from"
              name="from"
              options={cities}
              // groupBy={(option) => option.id}
              // getOptionLabel={(option) => option.label}
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
                  value={values?.from}
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
              // groupBy={(option) => option.id}
              // getOptionLabel={(option) => option.label}
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
                  value={values?.to}
                  onBlur={handleBlur}
                  helperText={touched.to && errors.to}
                  error={touched.to && Boolean(errors.to)}
                />
              )}
            />


        <div className="form__control">
        <TextField
         style={{ width: 300 }}
          // id="outlined-select-currency"
          select
          label="Choose a type..."
          margin="normal"
          name='type'
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.type && errors.type}
          error={touched.type && Boolean(errors.type)}

          // helperText="Please select your currency"
        >
          {/* <MenuItem value={0} >Choose a type...</MenuItem> */}
          {parselTypes.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        {/* const optionType = parselTypes.map(option => (
    <option key={option.id} value={option.id}>{option.name}</option>
  )); */}

        {/* <Select 
    ClassName="  "
    Name="type"
    Id="type"
    Placeholder='Choose Year Value'
    Value={values.type}
    OnBlur={handleBlur}
    OnChange={selectedOption => {
        let Event = { Target : { Name:'type',value: SelectedOption}}
        HandleChange(event)
    }}
    OnBlur={()=>{
      HandleBlur({ Target: {name:'type'} });
    }}
    Options={optionType}
/> */}



        {/* <Field as="select" name="type">
          <option value={0} >Choose a type...</option>
          {optionType}
         </Field> */}
        {/* <Field
          label="Password"
          name="password"
          displayEmpty={true}
          component={Select}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="1">One</MenuItem>
          <MenuItem value="2">Two</MenuItem>
          <MenuItem value="3">Three</MenuItem>
        </Field> */}
        {/* <FormControl >
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values?.type}
            label="Age"
            onChange={handleChange}
          >
                      <option value={0} >Choose a type...</option>
          {optionType}
          </Select>
        </FormControl> */}

            {/* <label>
                Type of parcel:
                <select value={parselType} onChange={(e) => setParcelType(e.target.value)}>
                <option value={0} >Choose a type...</option>
                {optionType}
              </select>
            </label> */}

          </div>
          <div className="form__control">

          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Parcel description"
            // style={{ width: 200 }}
            margin="normal"
            name='description'
            value={values.description}
            onChange={handleChange}
          />
          </div>
          <div className="form__control">
          {/* <Field name="date" disablePast component={DatePickerField} /> */}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Departure Date"
              // maxDate = {new Date("2023-31-12")}
              minDate = {new Date()}
              // dateFormat="dd.MM.yyyy"
              
              // id="date"
              // name="date"
              // value={values.date}
              id="departureDate"
              name="departureDate"
              value={values?.departureDate}
              // onChange={handleChange}
              //   onChange={(val) => {
              //     console.log(val);
              //     //val is the variable which contain the selected date
              //     //You can set it anywhere
              // }}
              inputFormat="dd.MM.yyyy"
              onChange={(val) => {
                //val is the variable which contain the selected date
                //You can set it anywhere
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

export default Form2