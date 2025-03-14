import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .test(
      'validate for first uppercased letter',
      'Name must start with an uppercase letter',
      (value) => /^[A-Z]/.test(value || '')
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
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&#]).+$/,
      'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    )
    .required('Password is required'),
  // ),
  // password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters').test(
  //     'validate for password strength',
  //     'password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
  //     (value) => /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&#]).+$/.test(value || '')

  // ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: yup.string().required('Gender is required'),
  terms: yup.boolean().oneOf([true], 'You must accept Terms & Conditions'),
});

export default schema;
