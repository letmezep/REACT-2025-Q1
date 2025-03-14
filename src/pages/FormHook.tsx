import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import { FormState } from '../types/interfaces';

const FormHook = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const dispatch = useDispatch();

  const onSubmit = (data: FormState) => {
    dispatch(submitForm({ ...data }));
    console.log('Registration Data: ', data);
    navigate('/');
  };

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

        <input {...register('password')} placeholder="password" />
        {errors.password && (
          <p style={{ color: 'red' }}>{errors.password.message}</p>
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHook;
