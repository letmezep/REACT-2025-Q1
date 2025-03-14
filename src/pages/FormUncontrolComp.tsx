import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import * as yup from 'yup';
import schema from '../utils/schema';

const FormUncontrolComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      confirmPassword: confirmPasswordRef.current?.value ?? '',
      gender: genderRef.current?.value ?? '',
      terms: termsRef.current?.checked ?? false,
    };

    try {
      await schema.validate(formData, { abortEarly: false });

      dispatch(submitForm(formData));
      console.log('Form Data:', formData);
      setError(null);
      navigate('/');
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        setError(validationErrors.errors.join('\n'));
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form created using uncontrolled components approach</h1>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="number" ref={ageRef} placeholder="age" />
        <input type="email" ref={emailRef} placeholder="e-mail" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="confirm password"
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <h3>Gender</h3>
        <select ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* <input type="upload" ref={passwordRef} placeholder="upload" /> */}
        {/* <input type="country" ref={passwordRef} placeholder="country" /> */}

        <label>
          <input type="checkbox" ref={termsRef} />
          Accept Terms and Conditions
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormUncontrolComp;
