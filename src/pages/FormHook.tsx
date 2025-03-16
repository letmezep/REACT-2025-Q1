import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import { FormState } from '../types/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { MAX_FILE_SIZE } from '../constants';
import { selectCountries } from '../store/selectors';
import zxcvbn from 'zxcvbn';
import getSchema from '../utils/getSchema';

const ReactHookForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(selectCountries);

  const schema = getSchema(countries);
  const [fileError, setFileError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const result = zxcvbn(value);
    let strength: string;

    if (result.score <= 1) {
      strength = 'Weak';
    } else if (result.score <= 3) {
      strength = 'Strong';
    } else {
      strength = 'Very Strong';
    }

    setPasswordStrength(strength);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<FormState>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size should be less than 2MB.');
      return;
    }

    setFileError(null);
    const base64 = await convertToBase64(file);
    setValue('file', base64);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = (data: FormState) => {
    dispatch(submitForm({ ...data }));
    navigate('/');
  };

  return (
    <>
      <form className="react-hook-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item">
          <input {...register('name')} placeholder="Name" />

          <div className="error-field">
            {errors.name && (
              <span className="error-field" style={{ color: 'red' }}>
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        <div className="form-item">
          <input {...register('age')} placeholder="Age" />

          <div className="error-field">
            {errors.age && (
              <span style={{ color: 'red' }}>
                {errors.age.message && 'Age must be a positive number'}
              </span>
            )}
          </div>
        </div>

        <div className="form-item">
          <label>
            <input
              {...register('gender', { required: 'Gender is required' })}
              type="radio"
              value="Male"
            />
            Male
          </label>
          <label>
            <input
              {...register('gender', { required: 'Gender is required' })}
              type="radio"
              value="Female"
            />
            Female
          </label>
        </div>

        <div className="error-field">
          {!isValid && <span>Gender is required</span>}
          {errors.gender && (
            <span style={{ color: 'red' }}>{errors.gender.message}</span>
          )}
        </div>

        <div className="form-item">
          <input {...register('email')} placeholder="e-mail" />

          <div className="error-field">
            {errors.email && (
              <span style={{ color: 'red' }}>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="form-item">
          <input
            {...register('country')}
            list="countries"
            placeholder="Select country"
          />
          <datalist id="countries">
            {countries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <div className="error-field">
            {!isValid && <span>Country is required</span>}
            {errors.country && (
              <span style={{ color: 'red' }}>{errors.country.message}</span>
            )}
          </div>
        </div>

        <div className="form-item">
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />

          <div className="error-field">
            {errors.password && (
              <span style={{ color: 'red' }}>{errors.password.message}</span>
            )}
            <div className="error-field">
              {passwordStrength && (
                <span>
                  Password strength:{' '}
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
                    {passwordStrength}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className="form-item">
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm password"
            />
            <div className="error-field">
              {errors.confirmPassword && (
                <span style={{ color: 'red' }}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-item">
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
          />

          <div className="error-field">
            {fileError && <span style={{ color: 'red' }}>{fileError}</span>}
          </div>
        </div>

        <div className="form-item">
          <label>
            <input
              {...register('terms', {
                required: 'You must accept Terms & Conditions',
              })}
              type="checkbox"
            />
            Accept Terms and Conditions
          </label>

          <div className="error-field">
            {!isValid && <span>Country is required</span>}
            {errors.terms && (
              <span style={{ color: 'red' }}>{errors.terms.message}</span>
            )}
          </div>
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactHookForm;
