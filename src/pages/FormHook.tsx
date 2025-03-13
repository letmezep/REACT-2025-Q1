import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../store/slices/formSlice';
import { FormState } from '../types/interfaces';

const FormHook = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormState>();
  const dispatch = useDispatch();

  const onSubmit = (data: FormState) => {
    dispatch(submitForm({ ...data }));
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <input {...register('name')} placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHook;
