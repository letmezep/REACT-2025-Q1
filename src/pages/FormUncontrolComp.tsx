import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';

const FormUncontrolComp = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      submitForm({
        name: nameRef.current?.value ?? '',
        age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
        email: emailRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
      })
    );

    console.log('SUBMIT FORM');
    console.log('name', nameRef.current?.value);
    console.log('age', ageRef.current?.value);
    console.log('email', emailRef.current?.value);
    console.log('password', passwordRef.current?.value);

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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormUncontrolComp;
