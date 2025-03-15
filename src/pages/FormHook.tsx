import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import { FormState } from '../types/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../utils/schema';
import { useState } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

const FormHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const countries = useSelector(
    (state: RootState) => state.createCountriesSlice || []
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // formState: { errors },
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
    console.log('Submitted Data:', data);
    dispatch(submitForm({ ...data }));
    console.log('Registration Data: ', data);
    navigate('/');
  };

  console.log('Erroros: ', errors);
  console.log('Form valid:', Object.keys(errors).length === 0);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <input {...register('name')} placeholder="name" />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <input {...register('age')} placeholder="age" />
        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}

        <input {...register('email')} placeholder="e-mail" />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <input
          type="password"
          {...register('password')}
          placeholder="password"
        />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
        )}

        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="confirm password"
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
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

        <h3>Upload Image</h3>
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

        <h3>Country</h3>
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

        <h3>Gender</h3>
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

        {errors.gender && (
          <p style={{ color: 'red' }}>{errors.gender.message}</p>
        )}

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
        {/* <button type="submit">Submit</button> */}
      </form>
    </>
  );
};

export default FormHook;
