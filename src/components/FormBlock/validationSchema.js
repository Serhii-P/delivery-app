import * as yup from 'yup';
import { cities } from '../../data/cities';

const citiesList = cities.map(city => city.label);

 export const validationSchema = yup.object({
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
      .required('Field is required'),
  });