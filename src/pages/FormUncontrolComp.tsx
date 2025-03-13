import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../store/slices/formSlice';

const FormUncontrolComp = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      submitForm({
        name: nameRef.current?.value ?? '',
        age: ageRef.current?.value ?? '',
      })
    );
    console.log('SUBMIT FORM');
    console.log('name', nameRef.current?.value);
    console.log('age', ageRef.current?.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form created using uncontrolled components approach</h1>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="text" ref={ageRef} placeholder="age" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormUncontrolComp;
