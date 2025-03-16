import * as yup from 'yup';
import { RegExpName, RegExpPassword } from '../constants/index';

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .test(
      'validate for first uppercased letter',
      'Name must start with an uppercase letter',
      (value) => RegExpName.test(value || '')
    ),
  age: yup
    .number()
    .positive('Age must be positive')
    .integer()
    .required('Age is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      RegExpPassword,
      'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  terms: yup.boolean().oneOf([true], 'You must accept Terms & Conditions'),
  country: yup.string().required('Country is required'),
  file: yup.string().required('File upload is required'),
});

export default schema;
