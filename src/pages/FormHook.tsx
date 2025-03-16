import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import { FormState } from '../types/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import { useState } from 'react';
import { ALLOWED_TYPES, MAX_FILE_SIZE } from '../constants';
import { selectCountries } from '../store/selectors';
import zxcvbn from 'zxcvbn';

const ReactHookForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(selectCountries);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
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

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError('Only PNG and JPEG images are allowed.');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError('File size should be less than 2MB.');
      return;
    }

    setFileError(null);
    const base64 = await convertToBase64(file);
    setImagePreview(base64);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <input {...register('age')} placeholder="Age" />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}

        <div className="gender-box">
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
        {errors.gender && (
          <p style={{ color: 'red' }}>{errors.gender.message}</p>
        )}

        <input {...register('email')} placeholder="e-mail" />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

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
        {errors.country && (
          <p style={{ color: 'red' }}>{errors.country.message}</p>
        )}

        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}
        {passwordStrength && (
          <p>
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
          </p>
        )}

        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm password"
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
        )}

        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />

        {fileError && <p style={{ color: 'red' }}>{fileError}</p>}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        )}

        <label>
          <input
            {...register('terms', {
              required: 'You must accept Terms & Conditions',
            })}
            type="checkbox"
          />
          Accept Terms and Conditions
        </label>
        {errors.terms && <p style={{ color: 'red' }}>{errors.terms.message}</p>}

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactHookForm;
