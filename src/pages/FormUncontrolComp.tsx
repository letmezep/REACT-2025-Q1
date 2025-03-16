import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import * as yup from 'yup';
import schema from '../utils/schema';
import { MAX_FILE_SIZE } from '../constants';
import convertToBase64 from '../utils/convertToBase64';
import { selectCountries } from '../store/selectors';
import zxcvbn from 'zxcvbn';

const UnctrlCompForm = () => {
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
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const file = fileRef.current?.files?.[0];

    if (file) {
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

  const handlePasswordChange = () => {
    const password = passwordRef.current?.value ?? '';
    const result = zxcvbn(password);

    let strengthLabel = 'Weak';

    if (result.score >= 3 && result.score < 4) {
      strengthLabel = 'Strong';
    } else if (result.score === 4) {
      strengthLabel = 'Very Strong';
    }

    setPasswordStrength(strengthLabel);
  };

  return (
    <>
      <form className="unctrl-comp-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <input type="text" ref={nameRef} placeholder="Name" />
        </div>

        <div className="form-item">
          <input type="number" ref={ageRef} placeholder="Age" />
        </div>

        <div className="form-item">
          <select ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-item">
          <input type="email" ref={emailRef} placeholder="e-mail" />
        </div>

        <div className="form-item">
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
        </div>

        <div className="password-box">
          <div className="form-item">
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              onChange={handlePasswordChange}
            />

            <div className="error-field">
              {passwordStrength && (
                <span
                  style={{
                    color:
                      passwordStrength === 'Weak'
                        ? 'red'
                        : passwordStrength === 'Strong'
                          ? 'orange'
                          : 'green',
                  }}
                >
                  Password strength: {passwordStrength}
                </span>
              )}
            </div>
          </div>

          <div className="form-item">
            <input
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div className="form-item">
          <input
            type="file"
            ref={fileRef}
            accept="image/png, image/jpeg"
            placeholder="Upload image"
          />
        </div>

        <div className="form-item">
          <label>
            <input type="checkbox" ref={termsRef} />
            Accept Terms and Conditions
          </label>
        </div>

        <button type="submit">Submit</button>

        <div className="error-field">
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </form>
    </>
  );
};

export default UnctrlCompForm;
