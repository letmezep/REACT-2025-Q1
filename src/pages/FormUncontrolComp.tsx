import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';

const FormUncontrolComp = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value ?? '';
    const confirmPassword = confirmPasswordRef.current?.value ?? '';

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    dispatch(
      submitForm({
        name: nameRef.current?.value ?? '',
        age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
        email: emailRef.current?.value ?? '',
        password,
        gender: genderRef.current?.value ?? '',
      })
    );

    console.log('gender', genderRef.current?.value);

    setError(null);
    navigate('/');
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

        <input type="upload" ref={passwordRef} placeholder="upload" />
        <input type="country" ref={passwordRef} placeholder="country" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormUncontrolComp;
