import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import * as yup from 'yup';
import schema from '../utils/schema';
import { ALLOWED_TYPES, MAX_FILE_SIZE } from '../constants';
import convertToBase64 from '../utils/convertToBase64';
import { selectCountries } from '../store/selectors';

const FormUncontrolComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(selectCountries);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const file = fileRef.current?.files?.[0];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError('Only PNG and JPEG images are allowed.');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError('File size should be less than 2MB.');
        return;
      }
    }

    const fileBase64 = file ? await convertToBase64(file) : null;

    const formData = {
      name: nameRef.current?.value ?? '',
      age: ageRef.current?.value ? Number(ageRef.current.value) : 0,
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      confirmPassword: confirmPasswordRef.current?.value ?? '',
      gender: genderRef.current?.value ?? '',
      country: countryRef.current?.value ?? '',
      terms: termsRef.current?.checked ?? false,
      file: fileBase64 ?? '',
    };

    try {
      await schema.validate(formData, { abortEarly: false });

      dispatch(submitForm(formData));

      setError(null);
      navigate('/');
    } catch (validationErrors) {
      if (validationErrors instanceof yup.ValidationError) {
        setError(validationErrors.errors.join('\n'));
      }
    }
  };

  const handleFileChange = async () => {
    const file = fileRef.current?.files?.[0];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError('Only PNG and JPEG images are allowed.');
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError('File size should be less than 2MB.');
        return;
      }

      const base64 = await convertToBase64(file);
      setImagePreview(base64);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Name" />

        <input type="number" ref={ageRef} placeholder="Age" />

        <select ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="email" ref={emailRef} placeholder="e-mail" />

        <input
          type="text"
          list="countries"
          ref={countryRef}
          placeholder="Country"
        />
        <datalist id="countries">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>

        <input type="password" ref={passwordRef} placeholder="Password" />

        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm password"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="file"
          ref={fileRef}
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          placeholder="Upload image"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        )}

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
